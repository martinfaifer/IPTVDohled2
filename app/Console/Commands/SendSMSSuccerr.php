<?php

namespace App\Console\Commands;

use App\Http\Controllers\SMSController;
use Illuminate\Console\Command;

class SendSMSSuccerr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sendSMSsuccess';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Odeslání sms s informací o funkčním kanálu';

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
        SMSController::sendSMSchannelSuccessStatus();
    }
}
