<?php

namespace App\Console\Commands;

use App\Http\Controllers\StreamDiagnostic;
use Illuminate\Console\Command;

class CheckBitrateToPossibilityChangeChannelStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:CheckBitrateToPossibilityChangeChannelStatus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Příkaz na zjistení stavu bitratu a pokud se posledních 5 hodnot = 0 , změna statusu kanálu na error';

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
        print_r(StreamDiagnostic::changeStatusChannelIfBitrateIsZeroToErrorStatus());
    }
}
