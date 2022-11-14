<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ConfirmController extends Controller
{
    public function store(Request $request,$id)
    {
        // 商品到着時に商品到着にする
        Product::where('id',$id)->update([
            'situation_id' => 1
        ]);
    }
}
