<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IPTVDevice extends Model
{
    protected $fillable = [
        'name', 'ip', 'connection', 'status', 'data'
    ];
}
