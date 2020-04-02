<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HardwareController extends Controller
{
    public function getDifferenceDiskSpace()
    {

        $disk = disk_total_space("/");
        $diskGiga = $disk / 1000000000;

        $freeDisk = disk_free_space("/");
        $freeDiskGiga = $freeDisk / 1000000000;


        // percents %
        $onePercent = $diskGiga / 100;
        $percentsFree = $freeDiskGiga / $onePercent;

        return [
            'allspace' => round($diskGiga),
            'freeSpace' => round($freeDiskGiga),
            'percents' => round($percentsFree)
        ];
    }


    public function sysdata()
    {
        return sys_getloadavg();
    }
}
