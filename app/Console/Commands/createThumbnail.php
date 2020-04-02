<?php

namespace App\Console\Commands;

use App\Http\Controllers\WorkerController;
use Illuminate\Console\Command;

class createThumbnail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:createThumbnail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vytvoreni nahledu u kanálu';

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
        WorkerController::ImgWorker();
    }
}
