<?php

namespace App\Http\Controllers;

use App\Calendar;
use App\Channel;
use App\ChannelErrorTime;
use App\MailAlerts;
use App\SendedAlert;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    /**
     * fn pro odeslání mailu po 5 min, kdy kanál crashne
     * do té doby nebude zaslán žádný alert
     *
     * @return boolean
     */
    public static function sendErrorMail()
    {
        if (!Channel::where('Alert', "error")->where('sendAlert', "1")->whereDate('updated_at', '<', Carbon::now()->second(300)->toDateString())->first()) {
            // vynecháme
            return false;
        } else {
            // vratí se data, která se následne reportují

            foreach (Channel::where('Alert', "error")->where('sendAlert', "1")->whereDate('updated_at', '<', Carbon::now()->second(300)->toDateString())->get(['nazev', 'url', 'id']) as $channelToSend) {

                // sort kanálu, které mají plánovaný výpadek a neposílají se alerty

                if (Calendar::where("channelId", $channelToSend->id)->first()) {

                    foreach (Calendar::where("channelId", $channelToSend->id)->get() as $calendardata) {
                        $now = new Carbon();
                        $begintime = new Carbon($calendardata->start);
                        $endtime = new Carbon($calendardata->end);

                        if ($now >= $begintime && $now <= $endtime) {
                            // kanál nedohledujeme

                        } else {

                            // overení, ze kanal jiz nebyl jednou zaslan
                            if (!SendedAlert::where('channelId', $channelToSend['id'])->first()) {
                                // vyhledání zda kanál je komu poslat
                                if (MailAlerts::first()) {
                                    // existuji minimálne jeden mail na který se poslou alerty
                                    foreach (MailAlerts::get() as  $mail) {

                                        // kanal, status, prijmece
                                        try {
                                            MailController::basic_email($channelToSend['nazev'], "KO", "KO - " . $channelToSend['nazev'], $mail['mail'], "false", env("APP_URL") . "/#/settings/channels/" . $channelToSend['id'] . "/charts");
                                            MailHistoryController::store($mail['mail'], $channelToSend['nazev'] . " KO");
                                            SendedAlertController::store($channelToSend['id']);
                                        } catch (\Throwable $th) {
                                            // něco selhalo
                                            echo "neco selhalo pri odesilani / ukladani dat";
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {

                    // overení, ze kanal jiz nebyl jednou zaslan
                    if (!SendedAlert::where('channelId', $channelToSend['id'])->first()) {
                        // vyhledání zda kanál je komu poslat
                        if (MailAlerts::first()) {
                            // existuji minimálne jeden mail na který se poslou alerty
                            foreach (MailAlerts::get(['mail']) as  $mail) {

                                // kanal, status, prijmece
                                try {
                                    MailController::basic_email($channelToSend['nazev'], "KO", "KO - " . $channelToSend['nazev'], $mail['mail'], "false", env("APP_URL") . "/#/settings/channels/" . $channelToSend['id'] . "/charts");
                                    MailHistoryController::store($mail['mail'], $channelToSend['nazev'] . " KO");
                                    SendedAlertController::store($channelToSend['id']);
                                } catch (\Throwable $th) {
                                    // něco selhalo
                                    echo "neco selhalo pri odesilani / ukladani dat";
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    public static function sendSuccessMail()
    {
        // overeni, ze je komu odeslat alert
        if (MailAlerts::first()) {

            // existuje alert
            if (SendedAlert::first()) {
                foreach (MailAlerts::get() as  $mail) {
                    foreach (SendedAlert::get() as $sendedAlert) {
                        $channel = Channel::where('id', $sendedAlert['channelId'])->where('sendAlert', "1")->first();
                        if ($channel->Alert == "success") {


                            // kanal, status, prijmece
                            try {
                                $dobaVypadku = ChannelErrorTime::where('channelId', $sendedAlert['channelId'])->orderBy('created_at', 'desc')->first();
                                MailController::basic_email($channel['nazev'], "OK", "OK - " . $channel['nazev'],  $mail['mail'], $dobaVypadku, env("APP_URL") . "/#/settings/channels/" . $sendedAlert['channelId'] . "/charts");
                                MailHistoryController::store($mail['mail'], $channel['nazev'] . " OK");
                                SendedAlertController::remove($sendedAlert['channelId']);
                            } catch (\Throwable $th) {
                                // něco selhalo
                                echo "neco selhalo pri odesilani / ukladani dat";
                            }
                        }
                    }
                }
            }
        }
    }
}
