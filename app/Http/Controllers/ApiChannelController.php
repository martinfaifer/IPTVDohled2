<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use App\APIKey;
use App\Bitrate;
use App\Calendar;
use App\Channel;
use App\CrashedChannel;
use App\Volume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiChannelController extends Controller
{
    public function get()
    {
        return ApiChannel::get();
    }


    /**
     * fn pro získání náhledu na kanál
     *
     * @param [type] $imgUrl
     * @return void
     */
    public function getImg(Request $request)
    {

        if (!Channel::where('url', $request->channelUrl)->first()) {
            // nepodařilo se vyhledat kanál , return "false"

            return "false";
        }

        return Channel::where('url', $request->channelUrl)->first()->img;
    }


    /**
     * fn pro oveření zda kanál již je zavedený na dohledu a odeslání kladné odpopovedi ve formátu array nebo záportne ve formatu string "false"
     *
     * @param Request $request
     * @return string false
     * @return array
     */
    public function checkIfChannelExistAndReturnChannelDataOrFalseStatus(Request $request)
    {
        if (!Channel::where('url', $request->channelUrl)->first()) {
            // nepodařilo se vyhledat kanál , return "false"

            return "false";
        }

        return Channel::where('url', $request->channelUrl)->get(['id', 'Alert', 'noMonitor', 'audioLang', 'dohledVolume', 'dohledBitrate', 'vytvoritNahled', 'sendAlert', 'sendSMS', 'created_at', 'updated_at']);
    }


    /**
     * fn pro overeni zda kanal existuje a následné vracení grafu o hlasitosti nebo bitrate případně string "false
     *
     * @param Request $request
     * @return void
     */
    public function checkIfChannelExistAndReturnChartVolumeDataOrFalseStatus(Request $request)
    {
        if (!Channel::where('url', $request->channelUrl)->first()) {
            // nepodařilo se vyhledat kanál , return "false"

            return "false";
        }

        $channel = Channel::where('url', $request->channelUrl)->first();

        $chart = array();
        $volumes = Volume::where('channelId', $channel->id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($volumes as $volume) {
            $chart[] = array($volume['created_at'], $volume['volume']);
        }

        return $chart;
    }


    /**
     * fn po overeni zda kanal existuje a nasledne vraceni grafu bitrateu nebo false
     *
     * @param Request $request
     * @return void
     */
    public function checkIfChannelExistAndReturnChartBitrateDataOrFalseStatus(Request $request)
    {
        if (!Channel::where('url', $request->channelUrl)->first()) {
            // nepodařilo se vyhledat kanál , return "false"

            return "false";
        }

        $chart = array();
        $bitrates = Bitrate::where('channelId', $request->id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($bitrates as $bitrate) {
            $chart[] = array($bitrate['created_at'], $bitrate['bitrate']);
        }

        return $chart;
    }


    /**
     * fn pro zjisteni zda je zavedene API url pro napojeni na iptv dokumentaci a získávání dat
     *
     * @return void
     */
    public function checkIfExistApiForCreateChannel()
    {
        // addChannel

        if (ApiChannel::where('type', "addChannel")->first()) {
            $channels = Http::get(ApiChannel::where('type', "addChannel")->first()->apiUrl);
            return $channels->json();
        } else {
            return "false";
        }
    }

    /**
     * fn pro vzdálené odebrání kanálu z dohledu a odebrání veskerých dat o kanálu, keteré jsou ulezeny
     *
     * @param [request] $channelUrl
     * @return void
     */
    public function remoteDeleteChannelFromDohledAndRemoveAllDataAboutChannel(Request $request)
    {
        $channelData = Channel::where('url', $request->channelUrl)->first();

        UserHistoryController::store("api", "delete_stream", $channelData->nazev);

        Channel::where('id', $channelData->id)->delete();
        Volume::where('channelId', $channelData->id)->delete();
        Bitrate::where('channelId', $channelData->id)->delete();
        CrashedChannel::where('channelId', $channelData->id)->delete();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Stream byl úspěšně smazán!",
        ];
    }


    /**
     * fn pro odeslání kalendáře do externího systému
     *
     * authentizace pomoci api klice
     *
     * @return void
     */
    public function sendCalendarData(Request $request)
    {
        if (APIKey::where('apiKey', $request->api)->first()) {
            return Calendar::get();
        } else {

            return [
                'msg' => "nic zde není"
            ];
        }
    }


    /**
     * fn pro zobrazení typu, apiUrl a klice potrebneho pro komunikaci
     *
     * @return void
     */
    public function showData()
    {
        return ApiChannel::get();
    }
}
