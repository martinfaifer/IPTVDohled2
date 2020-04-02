<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FFprobeData extends Model
{
    protected $fillable = [
        'channelId', 'export'
    ];
}
