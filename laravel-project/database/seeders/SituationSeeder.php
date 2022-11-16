<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Situation;
use Illuminate\Database\Seeder;

class SituationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Situation::create([
            "situation_name" => "商品到着済み"
        ]);

        Situation::create([
            "situation_name" => "発送中"
        ]);

        Situation::create([
            "situation_name" => "取引中"
        ]);

        Situation::create([
            "situation_name" => "出品中"
        ]);

        Situation::create([
            "situation_name" => "発送済み"
        ]);
    }
}
