<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotFunctionChannel extends Model
{
    protected $fillable = [
        'channelId', 'test_one', 'test_two', 'test_three', 'test_four', 'test_five',
    ];
}
