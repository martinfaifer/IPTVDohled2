<?php

namespace App\Http\Controllers;

use App\Channel;
use App\CrashedChannel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class CrashedChannelController extends Controller
{
    public function getChannelCrashForADay(Request $request)
    {
        $chart = array();
        $charsheds = CrashedChannel::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(1))->get();
        // $charsheds = CrashedChannel::where('channelId', $request->id)->orderBy('created_at', 'desc')->limit(20)->get();
        foreach ($charsheds as $charshed) {
            $chart[] = array($charshed['created_at'], "1");
        }

        return $chart;
    }


    /**
     * fn pro smazání dat z db, která budou starší jak
     *
     * @return void
     */
    public function delteOlderThanTwoDays()
    {
        CrashedChannel::where('created_at', '<=', Carbon::now()->subdays(2))->delete();
    }

    /**
     * fn pro získání sumy vsech kanálů
     *
     * @return void
     */
    public function takeTopTenCrashedChannels()
    {
        $output = array();
        $channels = Channel::all();

        $tydenVminutachOnePercent = "10080"; //100%

        foreach ($channels as $channel) {
            $crashedChannelCount = CrashedChannel::where('channelId', $channel->id)->count();

            $tydenErr = CrashedChannel::where('channelId', $channel->id)->count() / 101;

            $output[] = array(
                'nazev' => $channel->nazev,
                'count' => CrashedChannel::where('channelId', $channel->id)->count(),
                'tydenPercentErr' => round($tydenErr)
            );
        }

        return $output;
    }


    /**
     * fn pro získání dat pro vytvoreni grafu, kdy se posilaji data od do
     *
     * @param Request $request
     * @return void
     */
    public function getDataFromTo(Request $request)
    {

        $chart = array();
        $dataOd = $request->datumOd . " " . $request->odCas;
        $dataDo = $request->doDate . " " . $request->doCas;


        $datas = CrashedChannel::where('channelId', $request->channelId)->where('created_at', '>=', $dataOd)
            ->where('created_at', '<=', $dataDo)
            ->get();

        foreach ($datas as $data) {
            $chart[] = array($data['created_at'], "1");
        }

        if (empty($chart)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Neexistují data pro vykreslení grafu!",
            ];
        } else {
            return $chart;
        }
    }
}
