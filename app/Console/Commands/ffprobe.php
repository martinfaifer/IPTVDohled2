<?php

namespace App\Console\Commands;

use App\Http\Controllers\FFprobeDataController;
use Illuminate\Console\Command;

class ffprobe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:ffprobe';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'FFprobe pro diagnostiku všech kanálů';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        FFprobeDataController::FFProbeAnalyza();
    }
}
