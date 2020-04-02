<?php

namespace App\Http\Controllers;

use App\Channel;
use App\VolumeAlert;
use Illuminate\Http\Request;

class VolumeAlertController extends Controller
{
    public static function store($channelId)
    {
        // vyhledání zda je již alert zaveden

        if (VolumeAlert::where('channelId', $channelId)->first()) {
            // alert je již zaveden
            // overeni zda je prvni test null
            if (VolumeAlert::where('channelId', $channelId)->where('test_two', 'true')->first()) {
                // druhá hodnota je vyplnena, hleda se test_tree

                if (VolumeAlert::where('channelId', $channelId)->where('test_three', 'true')->first()) {
                    // hodnota je vyplnena

                    if (VolumeAlert::where('channelId', $channelId)->where('test_four', 'true')->first()) {
                        // hodnota je vyplnena test 4

                        if (VolumeAlert::where('channelId', $channelId)->where('test_five', 'true')->first()) {
                            // hodnota je vyplnena test 5
                        } else {

                            // není vyplneno
                            VolumeAlert::where('channelId', $channelId)->update(['test_five' => "true"]);
                        }
                    } else {
                        // neni vyplneno
                        VolumeAlert::where('channelId', $channelId)->update(['test_four' => "true"]);
                    }
                } else {
                    // neni vyplneno
                    VolumeAlert::where('channelId', $channelId)->update(['test_three' => "true"]);
                }
            } else {
                // Druhá hodnota nebyla vyplněna => nastavuje se jako true
                VolumeAlert::where('channelId', $channelId)->update(['test_two' => "true"]);
            }
        } else {
            // Založení noveho alertu
            VolumeAlert::create([
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
        VolumeAlert::where('channelId', $channelId)->delete();
    }

    public function getAll()
    {
        if (VolumeAlert::first()) {
            $allProblems = VolumeAlert::all();
            foreach ($allProblems as $problem) {
                $channel = Channel::where('id', $problem->channelId)->first();
                $output[] = array(
                    'nazev' => $channel->nazev
                );
            }
            return $output;
        } else {
            return [];
        }
    }

    public function difference()
    {
        $allChannels = Channel::where('noMonitor', 'mdi-check')->get()->count(); //100%
        $audio = VolumeAlert::all()->count();
        if ($audio == "0") {
            return [
                "percent" => "0",
                "celkem" => $allChannels,
                "audio" => "0"
            ];
        } else {
            $onePercent = $allChannels / 100;
            $percents = $audio / $onePercent; // %

            return [
                "percent" => round($percents),
                "celkem" => $allChannels,
                "audio" => $audio
            ];
        }
    }
}
