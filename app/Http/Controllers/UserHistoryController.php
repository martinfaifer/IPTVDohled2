<?php

namespace App\Http\Controllers;

use App\UserHistory;
use Illuminate\Http\Request;

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
     *  $table->string('userId')->index();
            $table->string('akce');
            $table->text('data');
     */
    public static function store($userMail, $akce, $data)
    {
        UserHistory::create([
            'userId' => $userMail,
            'akce' => $akce,
            'data' => $data,
        ]);
    }



    public function getAll()
    {
        return UserHistory::all();
    }


    public function getLastTwentyRecords()
    {
        if (UserHistory::first()) {
            return UserHistory::orderBy('created_at', 'desc')->get()->take(20);
        } else {
            return false;
        }
    }
}
