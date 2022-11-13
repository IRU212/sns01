<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function index($id)
    {
        // 購入済み商品
        $purchase = new Purchase();
        $data = $purchase->where('product_id',$id)->exists();

        return response()->json($data);
    }

    public function store($id)
    {
        // 購入済みテーブルに追加
        $purchase = new Purchase();
        $purchase->user_id = session('login_id');
        $purchase->product_id = $id;
        $purchase->save();

        // 商品を購入時に発送中に変更
        $product = new Product();
        $product->where('id',$id)
                ->update([
                    "situation_id" => 2
                ]);
    }
}
