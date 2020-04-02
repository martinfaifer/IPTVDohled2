<?php

namespace App\Http\Controllers;

use App\MailHistory;
use Illuminate\Http\Request;

class MailHistoryController extends Controller
{
    public static function store($to, $body)
    {
        MailHistory::create([
            'to' => $to,
            'body' => $body,

        ]);
    }

    public function getAll()
    {
        return MailHistory::all();
    }
}
