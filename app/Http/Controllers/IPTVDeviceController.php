<?php

namespace App\Http\Controllers;

use App\APIDeviceUrl;
use App\IPTVDevice;
use App\Events\DevicesUpdate;
use Illuminate\Http\Request;
use JJG\Ping;

use function GuzzleHttp\Psr7\try_fopen;

class IPTVDeviceController extends Controller
{
    /**
     * fn pro získání informací o IPTV zařízeních
     *
     * @return void
     */
    protected function getDevices()
    {
        if (!IPTVDevice::first()) {
            return [
                'isAlert' => "isAlert",
                'stat' => "warning",
                'msg' => "Nejsou zde evidováná žádná zařízení!",
            ];
        }
        return IPTVDevice::get();
    }


    /**
     * fn pro dohledování zařízení
     *
     * dva typy overeni (connection) ping / api
     *
     * @return void
     */
    public static function deviceCheck()
    {
        if (!IPTVDevice::first()) {

            exit("Nejsou žádná zařízení k dohledu...");
        }

        // kontrola ICMP / PING
        if (!IPTVDevice::where('connection', "ping")->first()) {
            echo "Nejsou žádná zařízení pro dohled icmp..." . "\n";
        } else {
            foreach (IPTVDevice::where('connection', "ping")->get()  as $device) {
                $ping = new Ping($device->ip);

                $latency = $ping->ping();
                if ($latency !== false) {
                    // zarizeni odpovida
                    IPTVDevice::where('id', $device->id)->update(['status' => "success"]);
                    event(new DevicesUpdate(IPTVDevice::get(['name', 'status', 'ip'])));
                } else {
                    // zarizeni je nedostupné
                    IPTVDevice::where('id', $device->id)->update(['status' => "fail"]);
                    event(new DevicesUpdate(IPTVDevice::get(['name', 'status', 'ip'])));
                }
            }

            // kontrola pomoci API, primárne se jedná o transcodery u kazdeho zarizeni je mozne pridat pouze jednu url pro backend data, pro forntend bude neomezene mnozstvi
            if (!IPTVDevice::where('connection', "api")->first()) {
                echo "nejsou žádná zařízení pro dohled pomoci api..." . "\n";
            } else {
                foreach (IPTVDevice::where('connection', "api")->get() as $deviceApi) {
                    if (!APIDeviceUrl::where('deviceId', $deviceApi->id)->where('type', "backendData")->first()) {
                        IPTVDevice::where('id', $deviceApi->id)->update(['status' => "warning"]);
                    } else {

                        // pokud o připojení do api
                        try {
                            $apiData = file_get_contents('http://' . $deviceApi->ip . APIDeviceUrl::where('deviceId', $deviceApi->id)->where('type', "backendData")->first()->url);

                            $update = IPTVDevice::find($deviceApi->id);
                            $update->status = "success";
                            $update->data = json_decode($apiData);

                            $update->save();

                            unset($apiData);
                            event(new DevicesUpdate(IPTVDevice::get(['name', 'status', 'ip'])));
                            // pokus selhal
                        } catch (\Throwable $th) {
                            IPTVDevice::where('id', $deviceApi->id)->update(['status' => "fail"]);
                            event(new DevicesUpdate(IPTVDevice::get(['name', 'status', 'ip'])));
                        }
                    }
                }
                unset($apiData);
            }
        }
    }
}
