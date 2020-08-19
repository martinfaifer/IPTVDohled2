<?php

namespace App\Http\Controllers;

use App\Channel;
use App\SMS;
use App\SMSAlert;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SMSController extends Controller
{
    /**
     * fn pro zjisteni zda je moznost zaslat alert
     * Musí existovat moznost odeslat alert od
     * Musi existovat moznost odeslat alert k
     *
     * @return boolean
     */
    public static function checkIfExistAnyPosibilityToSendAert()
    {
        //    overeni, ze existuje nějaký záznam v tabulce
        if (SMS::first()) {
            // záznam existuje
            // vyhledání zda existuje zaznam odkud se maí data odeslat ( telefon )
            if (SMS::where('telNumberTo', "!=", null)->first()) {
                // existuje telefonní cislo te ktereho se daji odesilat sms
                // vyhledání zda je mozne nekomu zaslat SMS

                if (SMS::where('telNumberTo', "!=", null)->first()) {
                    // je komu odeslat mail
                    return true;
                } else {
                    // není komu odeslat, vrati false
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }


    /**
     * fn pro odeslaní SMS o stavu kanálu, ze je ve stavu error
     *
     * @return void
     */
    public static function sendSMSchannelErrorStatus()
    {
        if (self::checkIfExistAnyPosibilityToSendAert() == true) {
            // vyhledání kanálu, který umí poslat sms
            if (Channel::where('sendSMS', "1")->where('Alert', "error")->where('updated_at', '<', Carbon::now()->second(300)->toDateString())->first()) {

                // získání adresy / tel number kdo má zaslat sms
                $fromUser = SMS::where('mailFrom', "!=", null)->first();

                // existuje kanál, který umí odesílat alerty formou SMS
                foreach (Channel::where('sendSMS', "1")->where('Alert', "error")->where('updated_at', '<=', Carbon::now()->second(300))->get(['id', 'nazev']) as $channel) {
                    // overeni, ze kanal jiz neexistuje ulozeny v tabulce sms alert (není jeste vytvorena)
                    if (!SMSAlert::where('channelId', $channel->id)->first()) {

                        // odeslaní mailu
                        foreach (SMS::where('telNumberTo', "!=", null)->get(['telNumberTo']) as $userToSendData) {
                            // formát =>  cislo@sms.cz.o2.com max 20 znaku
                            // echo $userToSendData->telNumberTo . $fromUser->mailFrom;
                            // die;
                            MailController::smsAlert($channel->name, "KO", $channel->nazev . " = KO", $userToSendData->telNumberTo . $fromUser->mailFrom);
                            // zalození do tabulky smsAlerts pro neopetovné zaslání alertu
                            SMSAlert::create([
                                'channelId' => $channel->id
                            ]);
                        }
                    }
                }
            }
        }
    }

    /**
     * fn pro odeslání SMS o zmeny stavu kanálu z error na success
     *
     * @return void
     */
    public static function sendSMSchannelSuccessStatus()
    {

        if (self::checkIfExistAnyPosibilityToSendAert() == true) {
            if (Channel::where('sendSMS', "1")->where('Alert', "success")->where('updated_at', '<=', Carbon::now()->second(300))->first()) {
                // získání adresy / tel number kdo má zaslat sms
                $fromUser = SMS::where('mailFrom', "!=", null)->first();


                // overeni, ze kanal jiz neexistuje ulozeny v tabulce sms alert (není jeste vytvorena)
                if (SMSAlert::first()) {

                    foreach (SMSAlert::get() as $channel) {

                        // odeslaní mailu
                        foreach (SMS::where('telNumberTo', "!=", null)->get(['telNumberTo']) as $userToSendData) {

                            $channelName = Channel::find($channel->channelId);

                            MailController::smsAlert($channelName->nazev, "OK", $channelName->nazev . " = OK", $userToSendData->telNumberTo . $fromUser->mailFrom);
                            // odebrání z tabulky po odeslání
                            SMSAlert::find($channel->id)->delete();
                        }
                    }
                }
            }
        }
    }


    /**
     * fn pro získání dat, na jaká cusla se zasilaji maily
     *
     * @return void
     */
    public function getToData()
    {
        if (!SMS::where('telNumberTo', "!=", null)->first()) {
            return "fasle";
        } else {

            return SMS::where('telNumberTo', "!=", null)->get(['id', 'telNumberTo']);
        }
    }

    /**
     * fn pro ziskani udaje odkud se posilaji sms
     *
     * @return void
     */
    public function sendSMSfrom()
    {
        if (!SMS::where('mailFrom', "!=", null)->first()) {
            return false;
        } else {

            return SMS::where('mailFrom', "!=", null)->first();
        }
    }


    /**
     * fn pro odebrání telefoního cisla na které se zasilaji alerty
     *
     * @param Request $request
     * @return void
     */
    public function remove(Request $request)
    {
        try {
            SMS::find($request->smsId)->delete();
            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "tel. číslo bylo odebráno",
            ];
        } catch (\Throwable $th) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nepodařilo se z editovat uživatele, prosím obraťe se na správce",
            ];
        }
    }


    /**
     * fn pro uzalozeni nove sms
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        try {

            SMS::create([
                'telNumberTo' => $request->sms
            ]);

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "tel. číslo bylo založeno",
            ];
        } catch (\Throwable $th) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nepodařilo se z editovat uživatele, prosím obraťe se na správce",
            ];
        }
    }
}
