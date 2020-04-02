<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVolumeAlertsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('volume_alerts', function (Blueprint $table) {
            $table->id();
            $table->string('channelId')->index();
            $table->string('test_one')->nullable()->default(null);
            $table->string('test_two')->nullable()->default(null);
            $table->string('test_three')->nullable()->default(null);
            $table->string('test_four')->nullable()->default(null);
            $table->string('test_five')->nullable()->default(null);
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
        Schema::dropIfExists('volume_alerts');
    }
}
