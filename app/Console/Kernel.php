<?php

namespace App\Console;

use App\Bitrate;
use App\Channel;
use App\CrashedChannel;
use App\Events\SendDesktopAlert;
use App\NotFunctionChannel;
use App\Volume;
use App\VolumeAlert;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        /**
         * Prikaz pro vytvoreni nahledu, diagnostikování a získání hlasitosti ze streamu
         */
        $schedule->command('command:ffprobe')->everyMinute()->withoutOverlapping()->runInBackground();

        // MAIL ALERT -> zasila se na 4 pokus co byl kanal testován
        // $schedule->command('command:sendVolumeMailAlert')->everyFifteenMinutes()->runInBackground();
        // Sheduler pro smazání dat starších jak 7 týden
        $schedule->call(function () {
            Volume::where('created_at', '<=', Carbon::now()->subdays(7))->delete();
        })->daily();

        $schedule->call(function () {
            Bitrate::where('created_at', '<=', Carbon::now()->subdays(7))->delete();
        })->daily();

        $schedule->call(function () {
            CrashedChannel::where('created_at', '<=', Carbon::now()->subdays(7))->delete();
        })->daily();

        // DESKTOP ALERT -> zasila se alert na 3. pokus co byl kanal testovan
        $schedule->call(function () {
            if (NotFunctionChannel::where("test_three", "true")->first()) {
                $allChannelsProblems = NotFunctionChannel::where("test_three", "true")->get();
                foreach ($allChannelsProblems as $channelProblem) {
                    $findChannelName = Channel::where('id', $channelProblem->channelId)->get();
                    foreach ($findChannelName as $channel) {
                        event(new SendDesktopAlert($channel));
                    }
                }
            }
        })->everyFiveMinutes();

        // fn pro kontrolu již nedohledovaných kanalá, aby zbytecne nekde mevyseli, ale aby se zmenil jejich stav na success (nebudou videt v mozaice), a odebreali se z Volume alertu + nefuknich kanalu
        $schedule->call(function () {
            if (Channel::where('noMonitor', "mdi-close")->first()) {
                // kanaály, ktere se nedohledují
                foreach (Channel::where('noMonitor', "mdi-close")->get() as $channel) {
                    $update = Channel::find($channel->id);
                    $update->Alert = "success";
                    $update->save();

                    VolumeAlert::where('channelId', $channel->id)->delete();
                    NotFunctionChannel::where('channelId', $channel->id)->delete();
                }
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
