<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use App\APIKey;
use App\Calendar;
use App\Channel;
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
}
