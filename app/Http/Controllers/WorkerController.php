<?php

/**
 * Statická definice workerů
 * Každý worker má maximálně 15 kanálů na monitoring
 */

namespace App\Http\Controllers;

use App\Channel;
use App\Worker;
use Illuminate\Http\Request;
use Symfony\Component\Process\Process;

class WorkerController extends Controller
{
    var $channelLimit = "25";
    /**
     * ---------------------------------------------------------------------------------------------------
     * Vytvoření náhledů
     * Workery pro vytváření náhledů do mozaiky, jsou nezávyslí na workerech, které běží pro dohled
     * ---------------------------------------------------------------------------------------------------
     */


    public static function launchProcesses()
    {
        $channels = Channel::all();
        foreach ($channels as $channel) {
            exec('php artisan' . ' command:createThumbnail ' . $channel->url . ' > /dev/null &');
        }
    }


    public static function ImgWorker()
    {
        $allWorkers = Worker::all();
        foreach ($allWorkers as $worker) {
            $channels = ChannelController::workersChannels($worker->id);
            shell_exec('php' .  base_path('artisan') . ' command:ImgCommand ' . $channels . '  > /dev/null &');
        }
    }



    /**
     * ------------------------------------------------------------------------------------------------------------------------------------------------
     * FN PRO ZÍSKÁNÍ STATISTIKY VYUŽITÍ WORKERŮ
     * ------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * 15 = 100%
     *
     * @return void
     */
    public function workerStat()
    {
        $allWorkers = Worker::all();
        $onePercent = 100 / $this->channelLimit;
        foreach ($allWorkers as $worker) {
            $sumChannel = Channel::where('worker_id', $worker->id)->count();
            $currLoadWorker = $onePercent * $sumChannel;
            $output[] = array(
                'id' => $worker->id,
                'workerName' => $worker->workder,
                'load' => round($currLoadWorker)
            );
        }
        return $output;
    }

    /**
     * fn pro získání volných workerů
     *
     * @return void
     */
    public static function freeWorkers()
    {
        $output = array();

        $allWorkers = Worker::all();
        foreach ($allWorkers as $worker) {
            $sumChannel = Channel::where('worker_id', $worker->id)->count();

            if ($sumChannel < "20") {
                $output[] = array(
                    'id' => $worker->id,
                    'workerName' => $worker->workder
                );
            }
        }

        return $output;
    }
}
