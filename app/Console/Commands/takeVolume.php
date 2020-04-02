<?php

namespace App\Console\Commands;

use App\Http\Controllers\FFprobeDataController;
use Illuminate\Console\Command;

class takeVolume extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:takeVolume {channel}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'příkaz na získání aktuální hlasitosti ze setramu';

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
        FFprobeDataController::getVolumeLevelFromStream(($this->argument('channel')));
    }
}
