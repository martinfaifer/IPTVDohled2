<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    /**
     * sledování zátěže cpu
     *
     * @return void
     */
    public function checkCPU()
    {
        $load = sys_getloadavg();
        return round($load[0], 2);
    }

    /**
     * fm pro zjistení zda neexistují faildnuté queue
     *
     * @return array
     * @return boolean
     */
    public function checkFailedQueue()
    {
        $failedJobs = DB::select('select * from failed_jobs');

        if (empty($failedJobs)) {
            return false;
        } else {
            return $failedJobs;
        }
    }


    /**
     * fn pro zobrazení, která queue čekají na odbavení
     *
     * @return array
     * @return boolean
     */
    public function queue()
    {
        $queue = DB::select('select * from jobs');

        if (empty($queue)) {
            return false;
        } else {
            return $queue;
        }
    }
}
