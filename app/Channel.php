<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = [
        'nazev', 'url', 'radio', 'PMT_PID', 'PCR_PID', 'Subtitle_PID', 'Subtitle_Lang', 'Subtitle_err', 'Audio1_PID', 'Audio1_Codec', 'Audio1_Lang', 'Audio1_err', 'Audio2_PID', 'Audio2_Codec', 'Audio2_Lang', 'Audio2_err', 'Video_PID', 'Video_Codec', 'Video_Width', 'Video_Height', 'Video_err', 'img', 'Alert', 'noMonitor', 'worker_id', 'poznamka', 'FFProbe', 'volume', 'locked'
    ];
}
