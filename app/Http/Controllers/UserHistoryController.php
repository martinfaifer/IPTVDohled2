<?php

namespace App\Http\Controllers;

use App\UserHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserHistoryController extends Controller
{
    /**
     * fn pro ukladaní historie uzivatele
     *
     * @param [type] $userId
     * @param [type] $akce
     * @param [type] $data
     * @return void
     *
     */
    public static function store($userMail, $akce, $data)
    {
        UserHistory::create([
            'userId' => $userMail,
            'akce' => $akce,
            'data' => $data,
        ]);
    }



    /**
     * fn pro vypsání celé historie
     *
     * @return void
     */
    public function getAll()
    {
        return UserHistory::all();
    }


    /**
     * fn pro získání posledních 20 záznamů
     *
     * @return void
     */
    public function getLastTwentyRecords()
    {
        if (UserHistory::first()) {
            return UserHistory::orderBy('created_at', 'desc')->get()->take(20);
        } else {
            return false;
        }
    }


    /**
     * fn pro vypsání hostorie daného uživatele
     *
     * @param Request $request
     * @return void
     */
    public function getUserHistory()
    {
        $user = Auth::user();
        if (UserHistory::where('userId', $user->email)->first()) {

            return UserHistory::where('userId', $user->email)->orderBy('created_at', 'desc')->get();
        } else {

            return "false";
        }
    }
}
