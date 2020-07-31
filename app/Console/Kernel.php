<?php

namespace App\Console;

use App\Bitrate;
use App\Channel;
use App\CrashedChannel;
use App\Events\SendDesktopAlert;
use App\MailHistory;
use App\NotFunctionChannel;
use App\UserHistory;
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
        $schedule->command('command:ffprobe')->everyMinute()->runInBackground();  // balík příkazů jednak pro získání bitratu, ffproby a vytvoření náhledu
        $schedule->command('command:sendErrorMail')->everyThreeMinutes()->runInBackground(); // odeslání mail alertu s chybovými kanály
        $schedule->command('command:sendSuccessMail')->everyThreeMinutes()->runInBackground(); // odeslání mail alertu , když je kanál již ok
        $schedule->command('command:deleteImgOlderThanOneHour')->everyTenMinutes()->runInBackground(); // odebrání obrázků starších jak 1h z file systému
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

        // promázávání historie mailů
        $schedule->call(function () {
            MailHistory::where('created_at', '<=', Carbon::now()->subdays(7))->delete();
        })->daily();

        // promázávání user logu
        $schedule->call(function () {
            UserHistory::where('created_at', '<=', Carbon::now()->subdays(14))->delete();
        })->daily();

        // fn pro kontrolu již nedohledovaných kanalů, aby zbytecne nekde nevyseli, ale aby se zmenil jejich stav na success (nebudou videt v mozaice), a odebreali se z Volume alertu + nefuknich kanalu
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

        // dohled IPTV zarizeni / platformy
        $schedule->command('command:CheckIPTVDevice')->everyFiveMinutes()->runInBackground();
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
