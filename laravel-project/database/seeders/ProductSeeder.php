<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'パソコンi7',
            'introduce' => "商品です",
            'money' => rand(300,10000),
            'image_path' => '/storage/image/000000416210_hsDVDpd.png',
            'genre_id' => 3,
            'user_id' => rand(1,20)
        ]);

        Product::create([
            'name' => 'ワンピース102',
            'introduce' => "商品です",
            'money' => 432,
            'image_path' => '/storage/image/onepiece102.jpg',
            'genre_id' => 1,
            'user_id' => rand(1,20)
        ]);

        Product::create([
            'name' => 'タクトオーパス',
            'introduce' => "商品です",
            'money' => rand(300,10000),
            'image_path' => '/storage/image/9219da0562cd02902b8a5b54eba96525fa8c3040a00ccada68c9fcc8ccb10646_01.jpg',
            'genre_id' => 5,
            'user_id' => rand(1,20)
        ]);

        Product::create([
            'name' => 'まくら',
            'introduce' => "商品です",
            'money' => rand(300,10000),
            'image_path' => '/storage/image/keitsui.jpg',
            'genre_id' => 6,
            'user_id' => rand(1,20)
        ]);

    }
}
