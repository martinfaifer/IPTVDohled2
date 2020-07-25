<?php

namespace App\Console\Commands;

use App\Http\Controllers\IPTVDeviceController;
use Illuminate\Console\Command;

class CheckIPTVDevice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:CheckIPTVDevice';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Overování stavu iptv zarizeni , uloží do status success / fail';

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
        IPTVDeviceController::deviceCheck();
    }
}
