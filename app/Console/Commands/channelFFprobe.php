<?php

namespace App\Console\Commands;

use App\Http\Controllers\StreamDiagnostic;
use Illuminate\Console\Command;

class channelFFprobe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:channelFFprobe {channel}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'FFprobe pro daný kanál';

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
        StreamDiagnostic::ffprobe(($this->argument('channel')));
    }
}
