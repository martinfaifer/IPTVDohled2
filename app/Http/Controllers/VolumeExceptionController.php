<?php

namespace App\Http\Controllers;

use App\VolumeException;
use Illuminate\Http\Request;

class VolumeExceptionController extends Controller
{
    /**
     * fn pro ulození času, kdy se kanal dohleduje
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        if (VolumeException::where('channelId', $request->channelId)->first()) {

            $alert = VolumeException::where('channelId', $request->channelId)->first();

            $update = VolumeException::find($alert->id);
            $update->start_dohled = $request->start;
            $update->end_dohled = $request->end;

            $update->save();

            VolumeAlertController::remove($request->channelId);

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "Výjimka na dohled byla úspěšně uložena!",
            ];
        } else {
            VolumeException::create([
                'channelId' => $request->channelId,
                'start_dohled' => $request->start,
                'end_dohled' => $request->end,
            ]);

            VolumeAlertController::remove($request->channelId);

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "Výjimka na dohled byla úspěšně uložena!",
            ];
        }
    }


    /**
     * fn pro odebrání výjimky na dohled
     *
     * @param Request $request
     * @return void
     */
    public function remove(Request $request)
    {
        VolumeException::where('channelId', $request->channelId)->delete();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Výjimka na dohled byla úspěšně smazána!",
        ];
    }


    /**
     * zsíkání dat o kanálu
     *
     * @param Request $request
     * @return void
     */
    public function getChannelData(Request $request)
    {
        return VolumeException::where('channelid', $request->channelId)->first();
    }

    /**
     * fn pro získání všech záznamů z tabulky
     *
     * @return void
     */
    public static function getAll()
    {
        if (VolumeException::first()) {
            // true
            return VolumeException::all();
        } else {
            // false
            return "false";
        }
    }
}
