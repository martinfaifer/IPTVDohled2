<?php

namespace App\Http\Controllers;

use App\APIKey;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class APIKeyController extends Controller
{

    /**
     * fn pro vyhledání api klíče k danému uživateli
     *
     * @param Request $request->userId
     * @return bolean
     */
    public static function getByUser($userId)
    {
        if (APIKey::where('userId', $userId)->first()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * fn pro vytvoření api klice spárovaného s daným userem
     *
     * slouží ke komunikaci se systémem
     *
     * requesty se následne zasílají postem pro vyšší bezpečnost
     *
     * slouží pro plný crud do některých částí systému
     *
     * @param Request $request->userId
     * @return array
     */
    public static function create($userId)
    {
        APIKey::create([
            'userId' => $userId,
            'apiKey' => Str::random(40)
        ]);
    }


    /**
     * fn pro odebrání api klice od uživatele
     *
     * @param [type] $userId
     * @return void
     */
    public static function remove($userId)
    {
        APIKey::where("userId", $userId)->delete();
    }
}
