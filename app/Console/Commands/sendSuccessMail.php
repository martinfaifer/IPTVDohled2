<?php

namespace App\Console\Commands;

use App\Http\Controllers\AlertController;
use Illuminate\Console\Command;

class sendSuccessMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sendSuccessMail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Odeslání success alertu u kanálu, který již funguje a nefungoval';

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
        AlertController::sendSuccessMail();
    }
}
