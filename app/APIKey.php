<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class APIKey extends Model
{
    protected $fillable = [
        'userId', 'apiKey'
    ];
}
