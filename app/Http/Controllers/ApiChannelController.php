<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use Illuminate\Http\Request;

class ApiChannelController extends Controller
{
    public function get()
    {
        return ApiChannel::get();
    }
}
