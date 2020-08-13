<?php

namespace App\Http\Controllers;

use App\APIDeviceUrl;
use App\IPTVDevice;
use App\Events\DevicesUpdate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
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
     * fn pro vypsání zařízení ktere maji status fail
     *
     * @return void
     */
    protected function getFailDevices()
    {
        if (IPTVDevice::where('status', "fail")->first()) {
            return IPTVDevice::where('status', "fail")->get(['name']);
        } else {
            return false;
        }
    }

    /**
     * fn pro zobrazení dat do grafu
     *
     * @return void
     */
    protected function getIPTVDevicesGrafCount()
    {

        $allDevices = IPTVDevice::get()->count(); //100%
        $devicesNeco = IPTVDevice::where('status', "success")->get()->count(); // nejake ceslo

        if ($allDevices == $devicesNeco) {
            return [
                "percent" => "100",
                "celkem" => $allDevices,
                "checl" => $devicesNeco
            ];
        } else {

            $onePercent = $allDevices / 100;

            return [
                "percent" => round($devicesNeco / $onePercent),
                "celkem" => $allDevices,
                "checl" => $devicesNeco
            ];
        }
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

            return;
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
                            $apiData = Http::get('http://' . $deviceApi->ip . APIDeviceUrl::where('deviceId', $deviceApi->id)->where('type', "backendData")->first()->url);

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


    protected function devicesApiData()
    {
        foreach (IPTVDevice::where('connection', "api")->where('data', "!=", null)->get(['data']) as $apiDatas) {
            $apiData = $apiDatas;
        }

        foreach (json_decode($apiDatas->data, true) as $transcodersData) {
            foreach ($transcodersData as $transcoderData) {
                // return $transcoderData;
                // name , status
                $outputData[] = array(
                    'name' => $transcoderData["name"],
                    'status' => $transcoderData["status"]
                );
            }
        }

        return $outputData;
    }


    /**
     * fn pro vytvoreni nového zařízení ktere se bude dohledovat
     *
     *  deviceName
     *  deviceIp
     * dohledType
     * @param Request $request
     * @return array
     */
    public function create(Request $request)
    {

        if (IPTVDevice::where('ip', $request->deviceIp)->first()) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "zařízení s touto IP již existuje"
            ];
            die();
        }

        if (!filter_var($request->deviceIp, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "neplatný formát IP"
            ];
            die();
        }

        try {
            IPTVDevice::create([
                'name' => $request->deviceName,
                'ip' => $request->deviceIp,
                'connection' => $request->dohledType,
                'status' => "waiting"
            ]);

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "zařízení bylo vytvořeno"
            ];
        } catch (\Throwable $th) {

            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nepodařilo se vytvořit zařízení"
            ];
        }
    }

    /**
     * fn pro získání informací o jednom zařízení dle jeho id
     *  deviceId
     * @param Request $request
     * @return void
     */
    public function get(Request $request)
    {
        return IPTVDevice::find($request->deviceId);
    }

    /**
     * fn pro editaci zarizeni, ktere je zalozené
     *
     *  deviceName
     *  deviceIp
     *  dohledType
     *  deviceId
     * @param Request $request
     * @return array
     */
    public function editDevice(Request $request)
    {

        if (!filter_var($request->deviceIp, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "neplatný formát IP"
            ];
            die();
        }

        try {
            $update = IPTVDevice::find($request->deviceId);
            $update->name = $request->deviceName;
            $update->ip = $request->deviceIp;
            $update->status = "waiting";
            if ($request->dohledType != "") {
                $update->connection = $request->deohledType;
            }

            $update->save();


            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "editace byla úspěšná"
            ];
        } catch (\Throwable $th) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "nepodařilo se z editovat zařízení"
            ];
        }
    }

    /**
     * fn pro odenrání zařízení dle deviceId
     *
     * @param Request $request
     * @return void
     */
    public function delete(Request $request)
    {
        try {

            IPTVDevice::find($request->deviceId)->delete();

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "odebrání bylo úspěšné"
            ];
        } catch (\Throwable $th) {

            return [
                'isAlert' => "isAlert",
                'stat' => "erro",
                'msg' => "odebrání se nepodařilo"
            ];
        }
    }
}
