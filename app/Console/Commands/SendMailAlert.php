<?php

namespace App\Console\Commands;

use App\Channel;
use App\Http\Controllers\MailController;
use App\Http\Controllers\MailHistoryController;
use App\Http\Controllers\VolumeAlertController;
use App\MailAlerts;
use App\NotFunctionChannel;
use App\VolumeAlert;
use Illuminate\Console\Command;

class SendMailAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sendVolumeMailAlert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Zasílání mailu s názvy chybových kanálů';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        date_default_timezone_set('Europe/Prague');

        $volumeErr = array();
        $channelCrash = array();

        if (VolumeAlert::where("test_five", "true")->first()) {
            $allVolumeProblems = VolumeAlert::where("test_five", "true")->get();
            foreach ($allVolumeProblems as $volumeProblem) {
                $findChannelName = Channel::where('id', $volumeProblem->channelId)->get();
                foreach ($findChannelName as $channel) {
                    $volumeErr[] = $channel->nazev;
                }
            }
        }


        // crashnute kanaly po 5 pokusu

        if (NotFunctionChannel::where("test_five", "true")->first()) {
            $allChannelsProblems = NotFunctionChannel::where("test_five", "true")->get();
            foreach ($allChannelsProblems as $channelProblem) {
                $findChannelName = Channel::where('id', $channelProblem->channelId)->get();
                foreach ($findChannelName as $channel) {
                    $channelCrash[] = $channel->nazev;
                }
            }
        }

        if (MailAlerts::first()) {
            // neco existuje, bude se zasílat mail

            foreach (MailAlerts::all() as $mail) {

                // empty($volumeErr) &&
                if (empty($channelCrash)) {

                    // } else if (empty($volumeErr)) {

                    //     $falseVolume = "false";
                    //     MailController::basic_email($falseVolume, $channelCrash, $mail->mail);

                    //     MailHistoryController::store($mail->mail, " nefuknčí kanály => " . json_encode($channelCrash));
                    // } else if (empty($channelCrash)) {
                    //     $falsecrash = "false";
                    //     MailController::basic_email($volumeErr, $falsecrash, $mail->mail);
                    //     MailHistoryController::store($mail->mail, "Kanály bez zvuku => " . json_encode($volumeErr));
                } else {
                    MailController::basic_email($volumeErr, $channelCrash, $mail->mail);
                    // MailHistoryController::store($mail->mail, "Kanály bez zvuku => " . json_encode($volumeErr) . " , nefuknčí kanály => " . json_encode($channelCrash));
                    MailHistoryController::store($mail->mail, "nefuknčí kanály => " . json_encode($channelCrash));
                }
            }
        }
    }
}
