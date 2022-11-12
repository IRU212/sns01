<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use App\Models\Transactionroom;
use App\Models\Transactionuser;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Undocumented function
     *
     * 購入手続き部屋作成
     *
     * transaction_room->save()
     */
    public function room_store(Request $request,$id)
    {
        // 取引部屋を作成
        $transaction_room = new Transactionroom();
        $transaction_room->product_id = $id;
        $transaction_room->save();

        // 商品を取引中に変更
        $product = new Product();
        $product->where('id',$id)
                ->update([
                    "situation_id" => 3
                ]);
    }

    public function user_store(Request $request)
    {
        // 最新のtransaction_room.idを取得
        $transaction_room = new Transactionroom();
        $transaction_room_id = $transaction_room->latest()->pluck('id')->first();

        // ログインユーザ用
        $transaction_user = new Transactionuser();
        $transaction_user->user_id = session('login_id');
        $transaction_user->transaction_room_id =  $transaction_room_id + 1;
        $transaction_user->save();

        // 出品者用
        $transaction_user = new Transactionuser();
        $transaction_user->user_id = $request->user_id;
        $transaction_user->transaction_room_id =  $transaction_room_id + 1;
        $transaction_user->save();
    }
}
