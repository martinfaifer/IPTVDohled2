<?php

namespace App\Http\Controllers;

use App\ChannelErrorTime;
use Illuminate\Http\Request;

class ChannelErrorTimeController extends Controller
{
    public static function store($channelId)
    {
        if (!ChannelErrorTime::where('channelId', $channelId)->where('ok_time', null)->first()) {
            ChannelErrorTime::create([
                'channelId' => $channelId,
                'ko_time' => date("l jS \of F Y H:i:s"),
                'ok_time' => null
            ]);
        }
    }


    public static function update($channelId)
    {
        $id = ChannelErrorTime::where('channelId', $channelId)->first();
        $update = ChannelErrorTime::find($id->id);
        $update->ok_time = date("l jS \of F Y H:i:s");

        $update->save();
    }


    public function getLasDayData(Request $request)
    {

        if (ChannelErrorTime::where('channelId', $request->id)->first()) {
            foreach (ChannelErrorTime::where('channelId', $request->id)->get() as $channelReport) {

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
