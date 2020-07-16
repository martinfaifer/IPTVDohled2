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
    public static function basic_email($channelName, $status, $toUser)
    {
        $data = array(
            'name' => "Alert",
            'status' => $status,
            'channel' => $channelName
        );

        Mail::send('mail', $data, function ($message) use ($toUser) {
            $message->to($toUser, 'IPTV Dohled')->subject('IPTV Dohled');
            $message->from('faifermartin2@seznam.cz', 'IPTV Dohled');
        });
    }

    /**
     * Odeslani mailu s názvy kanálu, kde není žádný zvuk
     *
     * @return void
     */
    public function sendVolumeAlert()
    {
        // if (VolumeAlert::where("test_three", "true")->first()) {
        //     $allVolumeProblems = VolumeAlert::where("test_three", "true")->get();
        //     foreach ($allVolumeProblems as $volumeProblem) {
        //         $findChannelName = Channel::where('id', $volumeProblem->channelId)->get();
        //         $output[] = $findChannelName;

        //         $this->basic_email($output, "martinfaifer@gmail.com");
        //     }
        // }
    }
}
