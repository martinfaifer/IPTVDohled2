<?php

namespace App\Http\Controllers;

use App\SendedAlert;
use Illuminate\Http\Request;

class SendedAlertController extends Controller
{
    public static function store($channelId)
    {
        SendedAlert::create([
            'channelId' => $channelId,

        ]);
    }

    public static function remove($channelId)
    {
        SendedAlert::where('channelId', $channelId)->delete();
    }
}
