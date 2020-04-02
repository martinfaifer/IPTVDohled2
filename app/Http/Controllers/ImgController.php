<?php

namespace App\Http\Controllers;

use App\Channel;
use Illuminate\Http\Request;

class ImgController extends Controller
{
    /**
     * fn na vytvoření náhledu
     *
     * @param [string] $channel
     * @return void
     */
    public static function createThumbnailAndDeleteOriginalLogika($channelUrl)
    {
        $channel = Channel::where('url', $channelUrl)->first();

        if ($channel->radio == "true") {
            // vynechat
        } else {

            $imgName = $channel["id"] . microtime(true) . '.jpg';
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
            // shell_exec('/usr/local/bin/ffmpeg -timeout 10000 -i -i ' . $channel["url"] . ' -vframes 1 storage/app/public/' . $imgName);
            shell_exec('ffmpeg -timeout 1000 -i ' . $channel["url"] . ' -vframes 1 storage/app/public/' . $imgName);

            // overení, ze byl náhled skutecne vytvoren
            if (file_exists(public_path('storage/' . $imgName))) {
                // Náhled existuje => uložení cesty k img do db

                // uložení do db
                $update = Channel::find($channel->id);
                $update->img = '/storage/' . $imgName;

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
