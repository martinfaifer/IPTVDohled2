<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channels', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('url')->index();
            $table->string('nazev')->index(); //název kanálu -> muze byt i popis
            $table->string('PMT_PID')->nullable(); //PMT PID získaný z ffprobe
            $table->string('PCR_PID')->nullable(); //PCR PID získaný z ffprobe
            $table->string('Subtitle_PID')->nullable()->default('false')->index(); // pid titulek
            $table->string('Subtitle_Lang')->nullable(); //jazyková stopa titulek
            $table->string('Subtitle_err')->nullable()->default('false'); //pokud titulky nebyli nalezeny nebo je jiný pid než získaný z proby, bude zde chyba
            $table->string('Audio1_PID')->nullable()->index(); //PID prvni zvukové stopy
            $table->string('Audio1_Codec')->nullable(); //codec prvni zvukové stopy
            $table->string('Audio1_Lang')->nullable(); //Jazyk prvni zvukové stopy
            $table->string('Audio1_err')->nullable()->default('false'); //pokud chyba tak stejné jako u titulek
            $table->string('Audio2_PID')->nullable()->default('false'); //PID druhé zvukové stopy
            $table->string('Audio2_Codec')->nullable(); //Codec druhé zvukové stopy
            $table->string('Audio2_Lang')->nullable(); //Jazyk druhé zvukové stopy
            $table->string('Audio2_err')->nullable()->default('false'); //pokud chyba tak stejné jako u titulek
            $table->string('Video_PID')->nullable()->index(); //Video PID
            $table->string('Video_Codec')->nullable(); //Video kodek
            $table->string('Video_Width')->nullable(); //Video výška v px
            $table->string('Video_Height')->nullable(); //Video šířka v px
            $table->string('Video_err')->nullable()->default('false'); //pokud chyba tak stejné jako u titulek
            $table->string('Alert')->nullable()->index();  // pokud se nepodaří probe vyhohí chybu
            $table->string('img')->default('false')->nullable();
            $table->string('noMonitor')->index()->nullable(); //pokud stream nechceme dohledovat -> dlouhodobá nefunkčnost
            $table->string('HighPriority')->nullable()->index()->default('false');
            $table->string('worker_id')->index();
            $table->string('poznamka')->nullable();
            $table->text('FFProbe')->nullable();
            $table->string('locked');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('channels');
    }
}
