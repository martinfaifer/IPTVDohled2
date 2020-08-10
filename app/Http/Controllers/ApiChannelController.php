<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiChannelController extends Controller
{
    public function get()
    {
        return ApiChannel::get();
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
}
