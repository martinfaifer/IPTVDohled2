<?php

namespace App\Console\Commands;

use App\Http\Controllers\ImgController;
use Illuminate\Console\Command;

class ImgCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:img {channels}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pod pripkaz pro vytvoreni nahledu -> channels array';

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
        print_r(ImgController::createThumbnailAndDeleteOriginalLogika($this->argument('channels')));
    }
}
