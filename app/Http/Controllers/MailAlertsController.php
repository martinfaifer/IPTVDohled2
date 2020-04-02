<?php

namespace App\Http\Controllers;

use App\MailAlerts;
use Illuminate\Http\Request;

class MailAlertsController extends Controller
{
    public function getAll()
    {
        return MailAlerts::all();
    }


    /**
     * fm pro ulození mailu do tabulky
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        if (MailAlerts::where('mail', $request->email)->first()) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "E-mail již existuje!",
            ];
        } else {
            MailAlerts::create([
                'mail' => $request->email,
            ]);

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "E-mail byl uložen!",
            ];
        }
    }

    /**
     * fn pro odebrání mailu
     *
     * @param Request $request
     * @return void
     */
    public function remove(Request $request)
    {
        MailAlerts::where('id', $request->mailId)->delete();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "E-mail byl smazán!",
        ];
    }
}
