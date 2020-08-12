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
     * fn pro obecnou správu z user GUI
     *
     * @param Request $request
     * @return array
     */
    public function storeOrDelete(Request $request)
    {
        try {

            if ($request->mailMotifikace == true) {

                if (MailAlerts::where('mail', $request->email)->first()) {

                    // mail je již zaveden

                } else {

                    MailAlerts::create([
                        'mail' => $request->email
                    ]);
                }
            } else {
                // odebrání mailu z alertu
                // kontrola, zda vubec existuje mail k odebrani
                if (MailAlerts::where("mail", $request->email)->first()) {
                    $idAlertuNaSmazani = MailAlerts::where("mail", $request->email)->first()->id;
                    MailAlerts::find($idAlertuNaSmazani)->delete();
                }
            }

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "Akce byla úspěšná",
            ];
        } catch (\Throwable $th) {

            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Něco se nepovedlo",
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
