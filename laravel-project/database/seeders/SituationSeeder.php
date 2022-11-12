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
            "name" => "購入済み"
        ]);

        Situation::create([
            "name" => "発送中"
        ]);

        Situation::create([
            "name" => "取引中"
        ]);

        Situation::create([
            "name" => "出品中"
        ]);
    }
}
