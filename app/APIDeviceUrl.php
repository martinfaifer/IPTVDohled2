<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class APIDeviceUrl extends Model
{
    protected $fillable = [
        'deviceId', 'url', 'type'
    ];
}
