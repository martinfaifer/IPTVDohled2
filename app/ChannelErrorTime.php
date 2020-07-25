<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChannelErrorTime extends Model
{
    protected $fillable = [
        'channelId', 'ko_time', 'ok_time'
    ];
}
