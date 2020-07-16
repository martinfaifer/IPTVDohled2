<?php

namespace App\Http\Controllers;

use App\Channel;
use App\Volume;
use App\VolumeAlert;
use App\VolumeException;
use App\Worker;
use Illuminate\Http\Request;

class FFprobeDataController extends Controller
{
    /**
     *
     * @return void
     */
    public static function FFProbeAnalyza()
    {
        $allWorkers = Worker::all();
        foreach ($allWorkers as $worker) {
            foreach (ChannelController::workersChannels($worker->id) as $channel) {
                shell_exec('php artisan' . ' command:channelFFprobe ' . $channel->url . '  > /dev/null &');
                shell_exec('php artisan' . ' command:takeVolume ' . $channel->url . '  > /dev/null &');
                shell_exec('php artisan' . ' command:img ' . $channel->url . '  > /dev/null &');
            }
        }
    }

    /**
     * fn pro získání urovne hlasitosti u strmu
     *
     * @return void
     */
    public static function getVolumeLevelFromStream($channelUrl)
    {
        $dataOutput = "0";

        $channel = Channel::where('url', $channelUrl)->first();

        // exec('/usr/local/bin/ffmpeg -timeout 1000 -i ' . $channelUrl . ' -vframes 1 -af "volumedetect" -f null /dev/null 2>&1', $output, $return_var);
        exec('ffmpeg -timeout 1000 -i ' . $channelUrl . ' -vframes 1 -af "volumedetect" -f null /dev/null 2>&1', $output, $return_var);

        $celkovyPocelKlicu =  count($output);

        // podminky nebyli splneny, hleda se pod jinym klicem , zkusime 3
        $maxVolume = $celkovyPocelKlicu - 3;
        if (strpos($output[$maxVolume], "max_volume:")) {
            $maximalniHlasitost = $output[$maxVolume];
            $explodeMaximalniHlasitosti = explode(':', $maximalniHlasitost);
            $dataOutput = str_replace(' dB', "", $explodeMaximalniHlasitosti[1]);
            $dataOutput = str_replace('-', "", $dataOutput);
        }

        // overení zda je pod klicem maximalni hodnota hlasitosti, pokud nebude tak se zkousi jiny klic
        $maxVolume = $celkovyPocelKlicu - 4;
        if (strpos($output[$maxVolume], "max_volume:")) {
            $maximalniHlasitost = $output[$maxVolume];
            $explodeMaximalniHlasitosti = explode(':', $maximalniHlasitost);
            $dataOutput = str_replace(' dB', "", $explodeMaximalniHlasitosti[1]);
            $dataOutput = str_replace('-', "", $dataOutput);
        }

        // podminky nebyli splneny, hleda se pod jinym klicem , zkusime 5
        $maxVolume = $celkovyPocelKlicu - 5;
        if (strpos($output[$maxVolume], "max_volume:")) {
            $maximalniHlasitost = $output[$maxVolume];
            $explodeMaximalniHlasitosti = explode(':', $maximalniHlasitost);
            $dataOutput = str_replace(' dB', "", $explodeMaximalniHlasitosti[1]);
            $dataOutput = str_replace('-', "", $dataOutput);
        }

        // podminky nebyli splneny, hleda se pod jinym klicem , zkusime 5
        $maxVolume = $celkovyPocelKlicu - 6;
        if (strpos($output[$maxVolume], "max_volume:")) {
            $maximalniHlasitost = $output[$maxVolume];
            $explodeMaximalniHlasitosti = explode(':', $maximalniHlasitost);
            $dataOutput = str_replace(' dB', "", $explodeMaximalniHlasitosti[1]);
            $dataOutput = str_replace('-', "", $dataOutput);
        }

        // podminky nebyli splneny, hleda se pod jinym klicem , zkusime 5
        $maxVolume = $celkovyPocelKlicu - 7;
        if (strpos($output[$maxVolume], "max_volume:")) {
            $maximalniHlasitost = $output[$maxVolume];
            $explodeMaximalniHlasitosti = explode(':', $maximalniHlasitost);
            $dataOutput = str_replace(' dB', "", $explodeMaximalniHlasitosti[1]);
            $dataOutput = str_replace('-', "", $dataOutput);
        }


        // VolumeController::store($channel->id, $output);

        Volume::create([
            'channelId' => $channel->id,
            'volume' => $dataOutput
        ]);

        // overeni zda se kanál má ukládat do db
        if (VolumeExceptionController::getAll() == "false") {
            // neexistuje zadne pravidlo pro kanal
            if ($dataOutput == "0") {
                VolumeAlertController::store($channel->id);
            } else {
                // smazání z tabuly Volume_alerts
                VolumeAlertController::remove($channel->id);
            }
        } else {
            // jsou nastavene vyjimky na kanaly

            // nalezeni kanálu, kterých se to netýka
            if (VolumeException::where('channelId', $channel->id)->first()) {
                // kanal byl nalezen bude aplikovano pravidlo na dohled

                date_default_timezone_set('Europe/Prague');

                $channelException = VolumeException::where('channelId', $channel->id)->first();

                $zacatek = $channelException->start_dohled;
                $zacatek = str_replace(":", "", $zacatek);
                $konec = $channelException->end_dohled;
                $konec = str_replace(":", "", $konec);
                // overeni zda na kanal se bude NYNI provadet aplikace pravidla hodnota start_dohled musi byt stejna nebo vetsi nez je currentTime a zaroven hodnota end_dohled musi byt stejna nebo nizsi nez currentTime

                if (date("Hi") > $zacatek || date("Hi") > $konec) {
                    // nebude se ukladat do db
                    // odebere se z mail alertingu
                    VolumeAlertController::remove($channel->id);
                } else if ($zacatek == "0000" and $konec == "0000") {
                    // nic se nedeje
                    // odebere se z mail alertingu
                    VolumeAlertController::remove($channel->id);
                } else {
                    // chováme se jak kdyby neexistovalo zadne pravidlo

                    if ($dataOutput == "0") {
                        VolumeAlertController::store($channel->id);
                    } else {
                        // smazání z tabuly Volume_alerts
                        VolumeAlertController::remove($channel->id);
                    }
                }
            } else {
                // kanal nalezen nebyl ukládá se jako, kdyby pravidlo neexistovalo

                if ($dataOutput == "0") {
                    VolumeAlertController::store($channel->id);
                } else {
                    // smazání z tabuly Volume_alerts
                    VolumeAlertController::remove($channel->id);
                }
            }
        }
    }
}
