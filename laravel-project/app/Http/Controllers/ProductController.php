<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        //
    }

    /**
     * $product->save();
     *
     * DBに保存
     *
     * @return void
     */
    public function store(Request $request)
    {
        $product = new Product();

        $product->name = $request->name;
        $product->introduce = $request->introduce;
        $product->money = $request->money;
        $product->situation_id = $request->situation_id;
        $product->genre_id = $request->genre_id;
        $product->user_id = $request->user_id;

        $product->save();
    }
}
