<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RemoteApi extends Model
{
    protected $fillable = [
        'url', 'apiKey'
    ];
}
