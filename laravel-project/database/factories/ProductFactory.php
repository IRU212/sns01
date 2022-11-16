<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $image_path = [];

        return [
            'name' => $this->faker->name,
            'introduce' => "商品です",
            'money' => rand(300,10000),
            'image_path',
            'genre_id' => rand(1,7),
            'user_id' => rand(1,20)
        ];
    }
}
