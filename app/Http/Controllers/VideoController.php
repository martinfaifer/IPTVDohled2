<?php

namespace App\Http\Controllers;

use App\Channel;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public static function createVideoSample($channelUrl)
    {
        // ffmpeg -timeout 10000 -i http://93.91.154.54:10224/udp/239.251.1.22:1234 -r 15 /Users/martinfaifer/Desktop/test.mp4

        $channel = Channel::where('url', $channelUrl)->first();
        if ($channel->radio == "true") {
            // vynechat
        } else {

            $videoName = $channel["id"] . microtime(true) . '.jpg';
            $oldImg = str_replace("/storage/", "", $channel["img"]);

            // overeni zda jiz existoval img
            if ($channel["img"] != "/storage/noImg.jpg") {
                // vyhledání původního náhledu a odstranění z filesystemu
                if (file_exists(public_path('storage/' . $oldImg))) {
                    // Náhled existuje => odebrání náhledu z filesystemu
                    unlink(public_path('storage/' . $oldImg));

                    $update = Channel::find($channel->id);
                    $update->img = 'false';

                    $update->save();
                }
            }

            // exec pro vytvoření nového náhledu pro mozaiku a uložení do db do tabulky channel pole img
            // shell_exec('/usr/local/bin/ffmpeg -timeout 100 -i ' . $channel["url"] . ' -vframes 1 storage/app/public/' . $videoName);
            shell_exec('/usr/local/bin/ffmpeg -timeout 10000 -i ' . $channel["url"] . ' -r 15 storage/app/public/' . $videoName);
            // shell_exec('ffmpeg -timeout 100 -i ' . $channel["url"] . ' -vframes 1 storage/app/public/' . $imgName);

            // overení, ze byl náhled skutecne vytvoren
            if (file_exists(public_path('storage/' . $videoName))) {
                // Náhled existuje => uložení cesty k img do db

                // uložení do db
                $update = Channel::find($channel->id);
                $update->img = '/storage/' . $videoName;

                $update->save();
            } else {
                // náhled nebyl nalezen => zapsání do db hodnoty false
                // uložení do db
                $update = Channel::find($channel->id);
                $update->img = '/storage/noImg.jpg';

                $update->save();
            }
        }
    }
}
