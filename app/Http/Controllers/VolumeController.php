<?php

namespace App\Http\Controllers;

use App\Volume;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VolumeController extends Controller
{
    public function getChannelVolumesForHour(Request $request)
    {
        $chart = array();
        $volumes = Volume::where('channelId', $request->id)->orderBy('created_at', 'desc')->limit(60)->get();
        foreach ($volumes as $volume) {
            $chart[] = array($volume['created_at'], $volume['volume']);
        }

        return $chart;
    }


    /**
     * fn ptro získání dat za jeden den
     *
     * @param Request $request
     * @return void
     */
    public function getChannelVolumesForADay(Request $request)
    {
        $chart = array();
        $oneDay = Volume::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(1))->get();
        foreach ($oneDay as $day) {
            $chart[] = array($day['created_at'], $day['volume']);
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


        $datas = Volume::where('channelId', $request->channelId)->where('created_at', '>=', $dataOd)
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
