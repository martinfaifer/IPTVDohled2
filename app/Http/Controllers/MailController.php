<?php

namespace App\Http\Controllers;

use App\Channel;
use App\VolumeAlert;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    /**
     * klasický mail
     * nazev, status, prijemce
     * @return void
     */
    public static function basic_email($channelName, $status, $subject, $toUser, $vypadek, $grafUrl)
    {
        $data = array(
            'name' => "Alert",
            'status' => $status,
            'channel' => $channelName,
            'vypadek' => $vypadek,
            'grafUrl' => $grafUrl,
            "sms" => "false"
        );

        Mail::send('mail', $data, function ($message) use ($toUser, $subject) {
            $message->to($toUser, 'IPTV Dohled')->subject($subject);
            $message->from('faifermartin2@seznam.cz', 'IPTV Dohled');
        });
    }

    /**
     * sms Alert mail
     * nazev, status, prijemce
     * @return void
     */
    public static function smsAlert($channelName, $status, $subject, $toUser)
    {
        $data = array(
            'name' => "Alert",
            'status' => $status,
            'channel' => $channelName,
            'vypadek' => "false",
            'grafUrl' => "false",
            "sms" => "true"
        );

        Mail::send('mail', $data, function ($message) use ($toUser, $subject) {
            $message->to($toUser, 'IPTV Dohled')->subject($subject);
            $message->from('faifermartin2@seznam.cz', 'IPTV Dohled');
        });
    }
}
