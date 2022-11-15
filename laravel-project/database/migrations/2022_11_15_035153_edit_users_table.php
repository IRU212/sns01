<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('first_name')->comment("苗字");
            $table->string('last_name')->comment("名前");
            $table->string('first_name_kana')->comment("苗字-カタカナ");
            $table->string('last_name_kana')->comment("名前-カタカナ");
            $table->string('icon_path')->nullable()->comment("アイコン");
            $table->string('back_path')->nullable()->comment("背景画像");
            $table->string('birthday')->comment("生年月日");
            $table->string('zip')->comment("郵便番号");
            $table->string('address')->comment("住所");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
