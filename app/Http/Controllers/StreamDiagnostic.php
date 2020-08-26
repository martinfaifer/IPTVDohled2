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
use Carbon\Carbon;
use FFMpeg\FFProbe;
use FFMpeg\FFMpeg;

class StreamDiagnostic extends Controller
{

    /**
     * fn pro overení zda kanál má stejné video Id a PCR pro synchronizaci video / audio
     *
     * @return void
     */
    public static function checkPcrPidAndVideoIdIfTheSameAndCheckStartTime($ffprobeRecord, $channelId)
    {
        $data = json_decode($ffprobeRecord, true); // převedení do json bez stdClass
        if (!array_key_exists("programs", $data)) {
            // neexistuje klíč programs

            // Pokud je kanál uložen ve stavu success , tak zmena na error
            $channelData = Channel::where('id', $channelId)->first();
            if ($channelData->Alert != "error") {

                return "error";
                die;
            }

            return "error";
            die;
        } else {

            foreach ($data["programs"] as $program) {
                if (array_key_exists("pcr_pid", $program)) {
                    $pcrPid = $program["pcr_pid"];
                } else {
                    return "error";
                    die;
                }

                if (array_key_exists("start_time", $program)) {
                    $orig_start_time = $program["start_time"];
                    $start_time = round($program["start_time"], 0);
                }
            }

            foreach ($data["programs"][0]["streams"] as $streams) {

                if ($streams["codec_type"] == "video") {

                    if (array_key_exists("id", $streams)) {
                        $streamId = hexdec($streams["id"]);
                    } else {
                        return "error";
                        die;
                    }

                    if (array_key_exists("start_time", $streams)) {
                        $orig_video_start_time = $streams["start_time"];
                        $video_start_time = round($streams["start_time"], 0);
                        // $video_start_time = $video_start_time[0];
                    }
                }

                if ($streams["codec_type"] == "audio") {

                    if (array_key_exists("start_time", $streams)) {
                        $orig_audio_start_time = $streams["start_time"];
                        $audio_start_time = round($streams["start_time"], 0);
                        // $audio_start_time = $audio_start_time[0];
                    }
                }
            }



            if ($streamId == $pcrPid) {

                if (isset($start_time) && isset($video_start_time) && isset($audio_start_time)) {

                    if ($start_time == $video_start_time && $start_time == $audio_start_time) {
                        return "success";
                        die;
                    } else {

                        $checkPrimarToVideo = intval($video_start_time) - intval($start_time);
                        $checkPrimarToAudio = intval($audio_start_time) - intval($start_time);

                        if ($checkPrimarToVideo <= 1 ||  $checkPrimarToAudio <= 1) {
                            return "success";
                            die;
                        } else {

                            $orig_start_time = explode(".", $orig_start_time);
                            $orig_video_start_time = explode(".", $orig_video_start_time);
                            $orig_audio_start_time = explode(".", $orig_audio_start_time);

                            if ($orig_start_time[0] == $orig_video_start_time[0] && $orig_start_time[0] == $orig_audio_start_time[0]) {
                                return "success";
                                die;
                            }
                        }


                        return "error";
                        die;
                    }
                }

                return "success";
                die;
            } else {
                return "error";
                die;
            }
        }

        // return $output;
    }


    /**
     * fn pro získání dat z FFProby, která ma na starost získaz detailní informace o kanále + uložit veškerá data do tabulky f_f_probe_data a aktualizovat zázanm v tabulce channels
     *
     * @param [string] $channelUrl
     * @return array
     */
    public static function ffprobe($channelUrl)
    {
        // $channelStatus = "success"; // nadefinování výchizí hodnoty
        $output = shell_exec("/usr/local/bin/ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 10");
        // $output = shell_exec("ffprobe -v quiet -print_format json -show_entries stream=bit_rate -show_programs " . $channelUrl . " -timeout 10");


        // Aktulizace nových dat v Channels
        $channel = Channel::where('url', $channelUrl)->first();

        // pokrocilejsi analýza je závislá na povolení dohledu bitratu
        if ($channel->dohledBitrate == "1") {
            // overení PCR a video ID -> náhrada za analyzeRecord + overení zda sedí približně šasy spusteni streamu (start_time)
            dd($channelStatus = self::checkPcrPidAndVideoIdIfTheSameAndCheckStartTime($output, $channel->id));
        } else {
            // analyzování dat zda je vystup platný
            $channelStatus = self::analyzeRecord($output, $channel->id);
        }
        // error
        $channelStatus = $channelStatus ?? "error";


        if ($channelStatus === "error") {
            ChannelErrorTimeController::store($channel->id);
        } else {

            if (ChannelErrorTime::where('channelId', $channel->id)->where('ok_time', null)->first()) {
                ChannelErrorTimeController::update($channel->id); // update tabulky, kdy je zaznamenáno, kdy skomcil výpadek na kanálu
            }
        }

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

            $output = "error";

            // Pokud je kanál uložen ve stavu success , tak zmena na error
            $channelData = Channel::where('id', $channelId)->first();
            if ($channelData->Alert != "error") {

                $output = "error";
            }
        } else {

            $output = "success";
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


    /**
     * fn pro overení zda kanál je funkční paklize není evidován bitrate nebo je bitrate  = 0 v posledních 5 pokusech tak se změní status kanálu na error
     *
     * pro provedení teto fn musí mít kanál zapnuté dohledování bitratu
     *
     * @return void
     */
    public static function changeStatusChannelIfBitrateIsZeroToErrorStatus()
    {
        foreach (Channel::where('dohledBitrate', "1")->get('id') as $channel) {
            // overovaci pole
            $arrayFroCheckANotherArray = array("0", "0", "0", "0", "0");
            $bitrateData = Bitrate::where('channelId', $channel->id)->limit(-5)->get('bitrate');

            $arrayFroCheck = array(); // pole, kam se budou vkladat hodnoty bitrate a po zpracování se smaže

            // overeni ze vsechny zaznamy jsou = 0 => kanál nejspise nefunguje a zmení se status kanálu na error
            foreach ($bitrateData as $bitrate) {

                // vytvorení jednorozmerneho pole

                array_push($arrayFroCheck, $bitrate->bitrate);
            }

            // oevreni zda pole je rovno 0,0,0,0
            if ($arrayFroCheckANotherArray == $arrayFroCheck) {
                // update zaznamu na error, jelikož kanál nejspíse nefunguje
                $update = Channel::find($channel->id);
                $update->Alert = "error";

                $update->save();
            }

            unset($arrayFroCheck);
        }
    }
}
