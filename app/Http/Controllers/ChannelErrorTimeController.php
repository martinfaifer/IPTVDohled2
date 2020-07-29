<?php

namespace App\Http\Controllers;

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
}
