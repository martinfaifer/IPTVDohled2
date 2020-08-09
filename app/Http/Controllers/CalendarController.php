<?php

namespace App\Http\Controllers;

use App\Calendar;
use App\Channel;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    /**
     * fn pro zobrazní událostí do kaneldáře
     *
     * @return void
     */
    public function return()
    {
        if (Calendar::first()) {

            foreach (Calendar::get() as $calendarData) {
                if ($calendarData->color == null) {
                    $color = "red";
                } else {
                    $color = $calendarData->color;
                }
                $outputData[] = array(
                    'name' => Channel::find($calendarData->channelId)->nazev,
                    'start' => $calendarData->start,
                    'end' => $calendarData->end,
                    'color' => $color
                );
            }


            return $outputData;
        } else {
            // nic neexistuje
            return;
        }
    }



    /**
     * fn pro získání eventu pro kanál
     *
     * @param [type] $id
     * @return void
     */
    public function getById($channelId)
    {
        if (Calendar::where('channelId', $channelId)->first()) {
            return Calendar::where('channelId', $channelId)->get();
        } else {
            return false;
        }
    }


    /**
     * fn pro zjištění zda ve stávající den je plánovaný nějaký výpadek kanálu
     *
     * @return void
     */
    public function checkIfIsTodayAnyPlannedChannelIssue()
    {
        $dt = new Carbon();
        if (Calendar::where('start', 'LIKE', '%' . $dt->toDateString() . '%')->orWhere('end', 'LIKE', '%' . $dt->toDateString() . '%')->first()) {
            foreach (Calendar::where('start', 'LIKE', '%' . $dt->toDateString() . '%')->orWhere('end', 'LIKE', '%' . $dt->toDateString() . '%')->get() as $dataToNotify) {
                $outputData[] = array(
                    'channelName' => Channel::find($dataToNotify->channelId)->nazev,
                    'zacatekVypadku' => $dataToNotify->start,
                    'konecVypadku' => $dataToNotify->end
                );
            }

            return $outputData;
        } else {


            return false;
        }
    }
}
