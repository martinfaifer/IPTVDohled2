<?php

namespace App\Http\Controllers;

use App\Channel;
use App\CustumMozaika;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustumMozaikaController extends Controller
{
    /**
     * fn pro získání informace zda uzivatel má nadefinovanou custom mozaiku
     *
     * @param [type] $userId
     * @return boolean
     * @return array
     */
    public static function get($userId)
    {
        if (CustumMozaika::where('userId', $userId)->first()) {
            $customMozaikaData = CustumMozaika::where('userId', $userId)->first();
            $staticChannels = explode(",", $customMozaikaData->staticChannels);
            foreach ($staticChannels as $staticChannel) {
                foreach (Channel::where('noMonitor', "mdi-check")->where('id', $staticChannel)->get(['id', 'nazev', 'img', 'Alert', 'audioLang', 'api', 'dohledVolume', 'dohledBitrate', 'dokumentaceUrl']) as $channel) {
                    $channels[] = array(
                        'id' => $channel->id,
                        'nazev' => $channel->nazev,
                        'img' => $channel->img,
                        'Alert' => $channel->Alert,
                        'audioLang' => $channel->audioLang,
                        'api' => $channel->api,
                        'dohledVolume' => $channel->dohledVolume,
                        'dohledBitrate' => $channel->dohledBitrate,
                        'dokumentaceUrl' => $channel->dokumentaceUrl
                    );
                }
            }
            return $channels;
        } else {
            return false;
        }
    }

    /**
     * fn pro získání informace zda uzivatel má nadefinovanou custom mozaiku
     *
     * @param [type] $userId
     * @return boolean
     * @return array
     */
    public static function getReq()
    {
        $user = Auth::user();
        if (CustumMozaika::where('userId', $user->id)->first()) {
            $customMozaikaData = CustumMozaika::where('userId', $user->id)->first();
            $staticChannels = explode(",", $customMozaikaData->staticChannels);
            foreach ($staticChannels as $staticChannel) {
                foreach (Channel::where('noMonitor', "mdi-check")->where('id', $staticChannel)->get(['id', 'nazev', 'img', 'Alert', 'audioLang', 'api', 'dohledVolume', 'dohledBitrate', 'dokumentaceUrl']) as $channel) {
                    $channels[] = array(
                        'id' => $channel->id,
                        'nazev' => $channel->nazev,
                        'img' => $channel->img,
                        'Alert' => $channel->Alert,
                        'audioLang' => $channel->audioLang,
                        'api' => $channel->api,
                        'dohledVolume' => $channel->dohledVolume,
                        'dohledBitrate' => $channel->dohledBitrate,
                        'dokumentaceUrl' => $channel->dokumentaceUrl
                    );
                }
            }
            return $channels;
        } else {
            return false;
        }
    }

    /**
     * vytvoreni nebo editace jiz stavajico templatu
     *
     * @param [type] $userId
     * @param array $staticChannel
     * @return void
     */
    public static function createOrUpdate($userId, $staticChannels)
    {
        $channelsId = array();
        // získání id kanálů
        foreach ($staticChannels as $staticChannel) {
            array_push($channelsId, $staticChannel["id"]);
        }

        if (CustumMozaika::where('userId', $userId)->first()) {
            // jiz existuje, editujeme stavající template

            $update = CustumMozaika::find(CustumMozaika::where('userId', $userId)->first()->id);
            $update->staticChannels = $channelsId;
            $update->save();
        } else {
            // zakladame nove pravidlo do tabulky pro custom template
            CustumMozaika::create([
                'userId' => $userId,
                'staticChannels' => json_encode($channelsId)
            ]);
        }
    }


    /**
     * fn pro odebrání záznamu z tabulky
     *
     * @param [type] $userId
     * @return void
     */
    public static function remove($userId)
    {
        try {
            CustumMozaika::find(CustumMozaika::where('userId', $userId)->first()->id)->delete();
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
