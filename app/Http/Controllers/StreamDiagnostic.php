<?php

namespace App\Http\Controllers;

use App\Bitrate;
use App\Channel;
use App\CrashedChannel;
use App\FFprobeData;
use Illuminate\Http\Request;
use App\Events\SendDesktopAlert;
use App\MailAlerts;
use App\NotFunctionChannel;
use App\VolumeAlert;
use App\VolumeException;

class StreamDiagnostic extends Controller
{
    /**
     * fn pro získání dat z FFProby, která ma na starost získaz detailní informace o kanále + uložit veškerá data do tabulky f_f_probe_data a aktualizovat zázanm v tabulce channels
     *
     * @param [string] $channelUrl
     * @return array
     */
    public static function ffprobe($channelUrl)
    {
        $channel = Channel::where('url', $channelUrl)->first();


        // $output = shell_exec("/usr/local/bin/ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 15");
        $output = shell_exec("ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 10");

        // Uložení dat pro budoucí zpracování
        // FFprobeData::create([
        //     'channelId' => $channel->id,
        //     'export' => $output
        // ]);

        // Aktulizace nových dat v Channels
        Channel::where('id', $channel->id)->update(['FFProbe' => $output]);

        // analyzování dat zda je vystup platný
        self::analyzeRecord($output, $channel->id);
        self::getBitrate($output, $channel->id);
    }


    /**
     * fn pro analýzu dat z ffproby a získání detailních informací o kanálu a následně porovnat, zda není odchylka
     *
     * @param [array] $ffprobeRecord
     * @param [string] $channelId
     * @return void
     */
    public static function analyzeRecord($ffprobeRecord, $channelId)
    {
        $data = json_decode($ffprobeRecord, true); // převedení do json bez stdClass
        if (!array_key_exists("programs", $data)) {

            // ulození, že kanál selhal
            NotFunctionChannelController::store($channelId);

            CrashedChannel::create([
                'channelId' => $channelId,
            ]);
        } else {
            $overeniZdaJeNutneProvadetUpdate = Channel::where('id', $channelId)->first();
            if ($overeniZdaJeNutneProvadetUpdate->Alert == 'success') {
                // Neni nutne aktualizovat zaznam, jelikoz kanal jiz ma hodnotu success
            } else {
                Channel::where('id', $channelId)->update(['Alert' => "success"]);
            }
            if (NotFunctionChannel::where('channelId', $channelId)->first()) {

                $check = NotFunctionChannel::where('channelId', $channelId)->first();
                if ($check['test_four'] == "true") {
                    // odeslat mail, ze je kanal již v poradku -> pokud kanal má posílat alerty

                    // overeni, zda se na kanalu dohleduje i hlasitost
                    if (VolumeException::where('channelId', $channelId)->first()) {
                        // pokud kanál zde existuje, zasílá se alert

                        //vyhledání názvu kanálu
                        $channelNameData = Channel::where('id', $channelId)->first();
                        // nazev kanalu $channelNameData['nazev'];

                        // vyhledání zda kanál je komu poslat
                        if (MailAlerts::first()) {
                            // existuji minimálne jeden mail na který se poslou alerty
                            foreach (MailAlerts::get() as  $mail) {

                                // kanal, status, prijmece
                                MailController::basic_email($channelNameData['nazev'], "OK", $mail['mail']);
                                MailHistoryController::store($mail['mail'], $channelNameData['nazev'] . " OK");
                            }
                        }
                    }
                }

                // odebrání kanálu z fronty na odeslani alertu
                NotFunctionChannelController::remove($channelId);
            }
        }
    }

    public static function getBitrate($jsonData, $channelId)
    {
        // definice $bitrate
        $bitrate = "0";

        $json = json_decode($jsonData, true);

        if (!array_key_exists("streams", $json)) {
            $bitrate = array(
                'bit_rate' => "0"
            );
        } else {
            foreach ($json["streams"] as $stream) {
                if (array_key_exists("bit_rate", $stream)) {
                    $bitrate = $stream["bit_rate"] / 10000;
                    break;
                } else {
                    $bitrate = "0";
                }
            }
        }

        Bitrate::create([
            'channelId' => $channelId,
            'bitrate' => $bitrate
        ]);
    }
}
