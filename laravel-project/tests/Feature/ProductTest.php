<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->post('api/product/store',[
            "name" => "sample",
            "introduce" => "sample",
            "money" => 500,
            "situation_id" =>1,
            "genre_id" => 1,
            "user_id" => 1
        ]);

        $response->assertStatus(200);
    }
}
