<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bitrate extends Model
{
    protected $fillable = [
        'channelId', 'bitrate'
    ];
}
