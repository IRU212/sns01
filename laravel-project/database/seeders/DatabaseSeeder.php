<?php

namespace Database\Seeders;

use App\Models\Situation;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // ログイン用データ
        // $this->call(UserSeeder::class);

        // ユーザ仮データ
        // \App\Models\User::factory()->count(19)->create();

        // 商品仮データ
        $this->call(ProductSeeder::class);

        // 商品状況
        // $this->call(SituationSeeder::class);
    }
}
