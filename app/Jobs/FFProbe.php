<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class FFProbe implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $channelUrl;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($channelUrl)
    {
        $this->channelUrl = $channelUrl;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        shell_exec('php artisan command:channelFFprobe ' . $this->channelUrl . ' > /dev/null &');
    }
}
