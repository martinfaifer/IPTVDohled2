<?php

namespace App\Http\Controllers;

use App\Bitrate;
use App\Channel;
use App\ChannelErrorTime;
use App\CrashedChannel;
use App\FFprobeData;
use Illuminate\Http\Request;
use App\Events\SendDesktopAlert;
use App\MailAlerts;
use App\NotFunctionChannel;
use App\VolumeAlert;
use App\VolumeException;
use FFMpeg\FFProbe;
use FFMpeg\FFMpeg;

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
        $channelStatus = "success"; // nadefinování výchizí hodnoty
        $output = shell_exec("/usr/local/bin/ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 10");
        // $output = shell_exec("ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 10");

        // Aktulizace nových dat v Channels
        $channel = Channel::where('url', $channelUrl)->first();

        // analyzování dat zda je vystup platný
        $channelStatus = self::analyzeRecord($output, $channel->id);

        try {
            if ($channelStatus == "success") {
                $data = json_decode($output, true);
                if (!array_key_exists("programs", $data)) {
                    $language = null;
                } else {
                    foreach ($data['programs'] as $program) {
                        foreach ($program['streams'] as $stream) {
                            if (!array_key_exists("tags", $stream)) {
                                $language = null;
                            } else {
                                $language = $stream['tags']["language"];
                            }
                        }
                    }
                }
            } else {
                $language = null;
            }
        } catch (\Throwable $th) {
            $language = null;
        }

        $update = Channel::find($channel->id);
        $update->Alert = $channelStatus;
        $update->FFProbe = $output;
        $update->audioLang = $language;
        $update->save();

        // overeni ze kanal má povolený dohled Bitratu
        if ($channel->dohledBitrate == "1") {
            self::getBitrate($output, $channel->id);
        }

        // overeni ze kanal má povolený dohled Hlasitosti
        if ($channel->dohledVolume == "1") {
            shell_exec('php artisan' . ' command:takeVolume ' . $channelUrl . ' > /dev/null &');
        }

        if ($channel->vytvoritNahled == "1") {
            shell_exec('php artisan' . ' command:img ' . $channelUrl . ' > /dev/null &');
        } else {
            //  odebraní img a zmena url v channel
        }
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
            // NotFunctionChannelController::store($channelId);

            $output = "error";

            // Pokud je kanál uložen ve stavu success , tak zmena na error
            $channelData = Channel::where('id', $channelId)->first();
            if ($channelData->Alert != "error") {

                $output = "error";
            }

            CrashedChannel::create([
                'channelId' => $channelId,
            ]);


            // ulození do tabulky, kde bude zaznamenáno od kdy do kdy byl výpadek
            if (ChannelErrorTimeController::store($channelId) == true) {
                //
            } else {
                return;
            }
        } else {

            $output = "success";

            // $overeniZdaJeNutneProvadetUpdate = Channel::where('id', $channelId)->first();
            // if ($overeniZdaJeNutneProvadetUpdate->Alert != "success") {

            //     $output = "success";
            // }

            // odebrání kanálu z fronty na odeslani alertu
            if (ChannelErrorTime::where('channelId', $channelId)->where('ok_time', null)->first()) {
                ChannelErrorTimeController::update($channelId); // update tabulky, kdy je zaznamenáno, kdy skomcil výpadek na kanálu
            }
        }

        return $output;
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
        try {
            Bitrate::create([
                'channelId' => $channelId,
                'bitrate' => $bitrate
            ]);
        } catch (\Throwable $th) {
            // vznikla chyba, nechame zatím bez jakékoliv akce a následně by se dodělal log
        }
    }
}
