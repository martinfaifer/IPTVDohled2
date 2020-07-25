<?php

namespace App\Console\Commands;

use App\Http\Controllers\AlertController;
use Illuminate\Console\Command;

class sendErrorMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sendErrorMail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Odeslání alertu s crashnutým streamem';

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
        AlertController::sendErrorMail();
    }
}
