<?php

namespace App\Http\Controllers;

use App\Channel;
use Illuminate\Http\Request;

class ImgController extends Controller
{
    /**
     * fn na vytvoření náhledu u aktivních kanálů
     *
     * @param [string] $channel
     * @return null
     */
    public static function createThumbnailAndDeleteOriginalLogika($channelUrl)
    {
        $channel = Channel::where('url', $channelUrl)->first();

        if ($channel->radio == "true") {
            // nic
        } else {
            if ($channel->Alert == "error") {
                // kanál je ve stavu error, neprovádí se u něj pokus o vytvoření náhledu
            } else {
                // zablokování kanálu pro další akce
                $update = Channel::find($channel->id);
                $update->locked = 'locked';
                $update->save();
                // kanál je success , tudíž nyní se vyhkledá stávající obrázek a smaže se  a následně se pokusí systém vytvořit nový obrázek
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


                try {

                    // exec pro vytvoření nového náhledu pro mozaiku a uložení do db do tabulky channel pole img
                    shell_exec('/usr/local/bin/ffmpeg -i ' . $channel["url"] . ' -vframes 1 storage/app/public/' . $imgName . ' -timeout 6  -timelimit 10');

                    // overení, ze byl náhled skutecne vytvoren
                    if (file_exists(public_path('storage/' . $imgName))) {
                        // Náhled existuje => uložení cesty k img do db

                        // uložení do db
                        $update = Channel::find($channel->id);
                        $update->img = '/storage/' . $imgName;
                        $update->locked = 'unlocked';
                        $update->save();
                    } else {
                        // náhled nebyl nalezen => zapsání do db hodnoty false
                        // uložení do db

                        $update = Channel::find($channel->id);
                        $update->locked = 'unlocked';
                        $update->img = "/storage/noImg.jpg";
                        $update->save();

                        $update->save();
                    }
                } catch (\Throwable $th) {
                    // když selze vytvoreni nahledu

                    $update = Channel::find($channel->id);
                    $update->locked = 'unlocked';
                    $update->img = "/storage/noImg.jpg";
                    $update->save();
                }
            }
        }
    }

    /**
     * fn pro smazání obrázků, které jsou starší něž jedna hodina
     * získání obrázků z file systemu
     * update záznamu img v tabulce channels po smazání z obrázku file systému
     *
     * @return array
     */
    public static function oldImgOlderThanOneHour()
    {
        $unixTimeMinusHodina = time() - 3600;  // získání unixtimu, který je starší jak jedna hodina
        foreach (scandir((public_path('/storage/'))) as $img) {
            // kontrola jednotlivých obrázků
            if ($img === "noImg.jpg" || $img === "radioImage.png" || $img ===  "videoErr.png" || $img === "." || $img === ".." || $img === ".gitignore") {
                // vynecháme
            } else {
                // kontrola zda obrázek je starší než jedna hodina
                if ($unixTimeMinusHodina > filemtime(public_path('/storage/' . $img))) {
                    unlink(public_path('/storage/' . $img));   // odebrání obrázku z file systemu
                    Channel::where('img', '/storage/' . $img)->update(['img' => "/storage/noImg.jpg"]);   // update záznamu v db
                }
            }
        }
    }
}
