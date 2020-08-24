<?php

namespace App\Console\Commands;

use App\Http\Controllers\ApiChannelController;
use Illuminate\Console\Command;

class autoRebootChannel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:autoRebootChannel';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Příkaz pro pokuso automatické restartování kanálu skrz iptv dokumentaci , bez api není funkční';

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
     * @return int
     */
    public function handle()
    {
        ApiChannelController::tryToAutomaticRebootChannel();
    }
}
