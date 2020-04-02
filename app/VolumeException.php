<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VolumeException extends Model
{
    protected $fillable = [
        'channelId', 'start_dohled', 'end_dohled'
    ];
}
