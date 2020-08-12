<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelperController extends Controller
{
    /**
     * fn pro overeni zda hodnota je 0 nebo 1 a vrati false nebo true
     *
     * @param [type] $value
     * @return void
     */
    public static function checkIfIsValueZeroOrOneAndReturnTrueOrFalse($value)
    {
        if ($value == "1") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * fn pro zjisteni zda hodnota ma status true nebo false a vrátí 1 nebo 0
     *
     * @param [type] $value
     * @return void
     */
    public static function checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($value)
    {

        if ($value == true) {
            return "1";
        } else {
            return "0";
        }
    }
}
