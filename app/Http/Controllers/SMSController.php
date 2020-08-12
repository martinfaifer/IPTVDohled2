<?php

namespace App\Http\Controllers;

use App\Channel;
use App\SMS;
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
            if (SMS::where('telNumberFrom', "!=", null)->first()) {
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
                // pokus vyhledání emailu, ze kterého se oedesle SMS
                if (SMS::where('mailFrom', "!=", null)->first()) {
                    // existuje , vyhledání zda je mozne nekomu zaslat SMS

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
            if (Channel::where('sendSMS', "1")->where('Alert', "error")->first()) {
                // existuje kanál, který umí odesílat alerty formou SMS
                foreach (Channel::where('sendSMS', "1")->where('Alert', "error")->get(['id', 'nazev']) as $channel) {
                    // overeni, ze kanal jiz neexistuje ulozeny v tabulce sms alert (není jeste vytvorena)
                    if (!$fnProOvereniKanalanu) {

                        // zde bude FN, která zjistí kanály, které odeslou alert

                        // po odeslani ulozeni do table sms alert (není jeste vytvorena)
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
            if (Channel::where('sendSMS', "1")->where('Alert', "success")->first()) {
                // existuje kanál, který umí odesílat alerty formou SMS

                // zde bude FN, která zjistí kanály, které odeslou alert

                // po odeslani odebrání z table sms alert (není jeste vytvorena)
            }
        }
    }
}
