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
            $table->string('Alert')->nullable()->index();  // pokud se nepodaří probe vyhohí chybu
            $table->string('img')->default('false')->nullable();
            $table->string('noMonitor')->index()->nullable(); //pokud stream nechceme dohledovat -> dlouhodobá nefunkčnost
            $table->string('poznamka')->nullable();
            $table->text('FFProbe')->nullable();
            $table->string('locked')->nullable();
            $table->string('audioLang')->nullable();
            $table->longText('dokumentaceUrl')->nullable();
            $table->string('dohledVolume')->index();
            $table->string('dohledBitrate')->index();
            $table->string('sendAlert')->index();
            $table->string('vytvoritNahled')->index();
            $table->string('dokumentaceId')->nullable();
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
