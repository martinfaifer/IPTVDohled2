<?php

namespace App\Http\Controllers;

use App\Channel;
use App\ChannelErrorTime;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ChannelErrorTimeController extends Controller
{
    public static function store($channelId)
    {
        SetLocale(LC_ALL, "Czech");

        if (!ChannelErrorTime::where('channelId', $channelId)->where('ok_time', null)->first()) {
            ChannelErrorTime::create([
                'channelId' => $channelId,
                'ko_time' => Date("j/m/Y H:i:s", Time()),
                'ok_time' => null
            ]);

            return true;
        }
    }


    public static function update($channelId)
    {
        SetLocale(LC_ALL, "Czech");

        $id = ChannelErrorTime::where('channelId', $channelId)->first();
        $update = ChannelErrorTime::find($id->id);
        $update->ok_time = Date("j/m/Y H:i:s", Time());

        $update->save();
    }


    public function getLasDayData(Request $request)
    {

        if (ChannelErrorTime::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(1))->first()) {

            foreach (ChannelErrorTime::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(1))->get() as $channelReport) {

                if ($channelReport->ok_time != null) {

                    $poleDat[] = array(
                        'id' => $channelReport->id,
                        'time' => $channelReport->ok_time,
                        'color' => "green",
                    );
                }
                $poleDat[] = array(
                    'id' => $channelReport->id,
                    'time' => $channelReport->ko_time,
                    'color' => "red",
                );
            }
            return $poleDat;
        } else {
            return [
                'status' => "false"
            ];
        }
    }


    public function getLasDayWeek(Request $request)
    {

        if (ChannelErrorTime::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(7))->first()) {

            foreach (ChannelErrorTime::where('channelId', $request->id)->where('created_at', '>=', Carbon::now()->subdays(7))->get() as $channelReport) {

                if ($channelReport->ok_time != null) {

                    $poleDat[] = array(
                        'id' => $channelReport->id,
                        'time' => $channelReport->ok_time,
                        'color' => "green",
                    );
                }
                $poleDat[] = array(
                    'id' => $channelReport->id,
                    'time' => $channelReport->ko_time,
                    'color' => "red",
                );
            }
            return $poleDat;
        } else {
            return [
                'status' => "false"
            ];
        }
    }


    /**
     * fn pro zobrazení dat v kalendari
     *
     * pokud je end = null => v názvu dát přívlastek kanál stále ve výpadku
     *
     * vyhledání dat podle channelId
     *
     * @return array
     */
    public function getCalendarView(Request $request)
    {
        if (ChannelErrorTime::where('channelId', $request->channelId)->first()) {

            foreach (ChannelErrorTime::where('channelId', $request->channelId)->get() as $channelErrorData) {

                $channelName = Channel::find($request->channelId)->nazev; // získání názvu kanálu

                // vytvoření pole , název, zacatek_vypadku , konec_vypadku

                $startSeparate = explode(" ", $channelErrorData->ko_time);

                $start = explode("/", $startSeparate[0]);
                $tart = str_replace("/", "-", $start);
                $zacatekVypadku = $start[2] . "-" . $start[1] . "-" . $start[0] . " " . $startSeparate[1];

                if ($channelErrorData->ok_time == null) {
                    $channelName = $channelName . " kanál ve výpadku";

                    $konecVypadku =  $zacatekVypadku;
                } else {
                    $end = explode("/", $channelErrorData->ok_time);
                    $konecVypadku = $end[2] . "-" . $end[1] . "-" . $end[0];
                }

                // pole pro kalendar
                $output[] = array(
                    'name' => $channelName,
                    'start' => $zacatekVypadku,
                    'end' => $konecVypadku
                );
            }

            return $output;
        } else {
            return false;
        }
    }
}
