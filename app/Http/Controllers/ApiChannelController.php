<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use App\APIKey;
use App\Calendar;
use App\Channel;
use App\Volume;
use App\Bitrate;
use App\ChannelErrorTime;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiChannelController extends Controller
{

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
        $channel = Channel::where('url', $request->channelUrl)->first();

        $chart = array();
        $bitrates = Bitrate::where('channelId', $channel->id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($bitrates as $bitrate) {
            $chart[] = array($bitrate['created_at'], $bitrate['bitrate']);
        }

        return $chart;
    }

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


    /**
     * fn pro pokus o automatický restart kanálu, který se zaslu na url dokumentace a následně dokumentace odbaví jak se má kanál restartovat na základe zařízení, které kanál odbavuje
     *
     * @return void
     */
    public static function tryToAutomaticRebootChannel()
    {
        if (Channel::where('Alert', "error")->where('sendAlert', "1")->whereDate('updated_at', '<', Carbon::now()->second(180)->toDateString())->first()) {

            foreach (Channel::where('Alert', "error")->where('sendAlert', "1")->whereDate('updated_at', '<', Carbon::now()->second(180)->toDateString())->get(['url', 'id']) as $channel) {

                $response = Http::get('http://10.255.255.58/api/channel/tryToRestartChannel', [
                    'dohledUrl' => $channel->url,
                ]);
            }
        }
    }


    /**
     * zaslaní hostorie kanálu pro dokumentaci pomocí api
     *
     * @param Request $request->
     * @return void
     */
    public function getHistoryOfChannel(Request $request)
    {
        if (!Channel::where('url', $request->channelUrl)->first()) {
            // nepodařilo se vyhledat kanál , return "false"

            return "false";
        } else {
            // ChannelErrorTime
            $channel = Channel::where('url', $request->channelUrl)->first();

            return ChannelErrorTime::where('channelId', $channel->id)->limit(10)->get();
        }
    }
}
