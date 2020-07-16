<?php

namespace App\Http\Controllers;

use App\Channel;
use App\MailAlerts;
use App\NotFunctionChannel;
use App\VolumeAlert;
use App\VolumeException;
use Illuminate\Http\Request;

class NotFunctionChannelController extends Controller
{
    public static function store($channelId)
    {
        // vyhledání zda je již alert zaveden

        if (NotFunctionChannel::where('channelId', $channelId)->first()) {
            // alert je již zaveden
            // overeni zda je prvni test null
            if (NotFunctionChannel::where('channelId', $channelId)->where('test_two', 'true')->first()) {
                // druhá hodnota je vyplnena, hleda se test_tree

                if (NotFunctionChannel::where('channelId', $channelId)->where('test_three', 'true')->first()) {
                    // hodnota je vyplnena

                    if (NotFunctionChannel::where('channelId', $channelId)->where('test_four', 'true')->first()) {
                        // hodnota je vyplnena test 4

                        if (NotFunctionChannel::where('channelId', $channelId)->where('test_five', 'true')->first()) {
                            // hodnota je vyplnena test 5
                        } else {

                            // není vyplneno
                            NotFunctionChannel::where('channelId', $channelId)->update(['test_five' => "true"]);
                        }
                    } else {
                        // neni vyplneno
                        NotFunctionChannel::where('channelId', $channelId)->update(['test_four' => "true"]);

                        // zaslat mail alert, overit vsechny podminky, zda kanal má posílat alerty
                        if (!VolumeException::where('channelId', $channelId)->first()) {
                            // pokud kanál zde existuje, zasílá se alert

                            //vyhledání názvu kanálu
                            $channelNameData = Channel::where('id', $channelId)->first();
                            // nazev kanalu $channelNameData['nazev'];

                            // vyhledání zda kanál je komu poslat

                            if (MailAlerts::first()) {
                                // existuji minimálne jeden mail na který se poslou alerty
                                foreach (MailAlerts::get() as  $mail) {

                                    // kanal, status, prijmece
                                    MailController::basic_email($channelNameData['nazev'], "KO", $mail['mail']);
                                    MailHistoryController::store($mail['mail'], $channelNameData['nazev'] . " KO");
                                }
                            }
                        }
                    }
                } else {
                    // neni vyplneno
                    NotFunctionChannel::where('channelId', $channelId)->update(['test_three' => "true"]);
                }
            } else {
                // Druhá hodnota nebyla vyplněna => nastavuje se jako true
                NotFunctionChannel::where('channelId', $channelId)->update(['test_two' => "true"]);
                // zde se kanál oznacuje jako crashnutý
                // Overeni zda jiz akanal nema Alert error, pokud ano neprovadi se aktualizace zaznamu
                $overeniZdaJeNutneAktualizovatZaznam = Channel::where('id', $channelId)->first();
                if ($overeniZdaJeNutneAktualizovatZaznam->Alert == 'error') {
                    // neni nutne provadet update
                } else {
                    Channel::where('id', $channelId)->update(['Alert' => "error"]);
                }
            }
        } else {
            // Založení noveho alertu
            NotFunctionChannel::create([
                'channelId' => $channelId,
                'test_one' => "true"
            ]);
        }
    }

    /**
     * fn pro odebrání záznamu z db
     *
     * @param [type] $channelId
     * @return void
     */
    public static function remove($channelId)
    {
        NotFunctionChannel::where('channelId', $channelId)->delete();
    }


    public function getCrashedChannel($name)
    {

        // return Channel::where('nazev', $name)->where('Alert', 'error')->whereMonth('created_at', date("m"))->take(50)->orderBy('created_at', 'desc')->get();
        return "false";
    }
}
