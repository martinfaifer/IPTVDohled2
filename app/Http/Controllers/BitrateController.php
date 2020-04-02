<?php

namespace App\Http\Controllers;

use App\Bitrate;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BitrateController extends Controller
{
    public static function getBitrate($channelId, $jsonData)
    {
        $bitrate = "0 Mbps";

        $json = json_decode($jsonData, true);
        if (!array_key_exists("streams", $json)) {
            $bitrate = array(
                'bit_rate' => "0 Mbps"
            );
        } else {
            foreach ($json["streams"] as $stream) {
                $bitrate = $stream;
            }
        }

        Bitrate::create([
            'channelId' => $channelId,
            'bitrate' => $bitrate
        ]);
    }


    public function getChannelBitratesForHour(Request $request)
    {
        $chart = array();
        $bitrates = Bitrate::where('channelId', $request->id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($bitrates as $bitrate) {
            $chart[] = array($bitrate['created_at'], $bitrate['bitrate']);
        }

        return $chart;
    }


    /**
     * fn pro GET
     *
     * @param [type] $id
     * @return void
     */

    public function getHourData($id)
    {
        $chart = array();
        $bitrates = Bitrate::where('channelId', $id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($bitrates as $bitrate) {
            $chart[] = array($bitrate['created_at'], $bitrate['bitrate']);
        }

        return $chart;
    }

    /**
     * fn pro získání dat z jednoho dne
     *
     * @return void
     */
    public function getChannelBitratesForADay(Request $request)
    {
        $chart = array();
        $oneDay = Bitrate::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(1))->get();
        foreach ($oneDay as $day) {
            $chart[] = array($day['created_at'], $day['bitrate']);
        }

        return $chart;
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


        $datas = Bitrate::where('channelId', $request->channelId)->where('created_at', '>=', $dataOd)
            ->where('created_at', '<=', $dataDo)
            ->get();

        foreach ($datas as $data) {
            $chart[] = array($data['created_at'], $data['volume']);
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
