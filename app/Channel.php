<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = [
        'nazev', 'url', 'radio', 'img', 'Alert', 'noMonitor', 'worker_id', 'poznamka', 'FFProbe', 'volume', 'locked', 'audioLang', 'dokumentaceUrl', 'dohledVolume', 'dohledBitrate', 'sendAlert'
    ];
}
