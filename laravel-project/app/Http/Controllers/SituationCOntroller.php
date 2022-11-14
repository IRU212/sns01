<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transactionroom;
use App\Models\Transactionuser;
use Illuminate\Http\Request;

class SituationCOntroller extends Controller
{
    public function index()
    {
        // ログインユーザID
        $user_id = session('login_id');

        $transaction_room_id = Transactionuser::where('user_id',$user_id)->get();

        $transaction_product_list = [];
        foreach ($transaction_room_id as $index => $item) {

            // 商品IDを取得
            $product_id = Transactionroom::where('id',$item->transaction_room_id)->first()->product_id;
            $transaction_product_list[] = Product::with('situation')->find($product_id);
        }

        return response()->json($transaction_product_list);
    }
}
