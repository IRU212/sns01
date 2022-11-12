<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use App\Models\Transactionroom;
use App\Models\Transactionuser;
use DB;
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

        // 部屋が作成されていなければ実行
        $is_room = $transaction_room->where('product_id',$id)->exists();
        if ($is_room == false) {
            // 取引部屋を作成
            $transaction_room->product_id = $id;
            $transaction_room->save();
        }

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

        // 商品ID
        $product_id = $request->product_id;
        $transaction_room_id_search = $transaction_room->where('product_id',$product_id)->pluck('id')->first();
        $transaction_user_count = $transaction_user->where('transaction_room_id',$transaction_room_id_search)->count();

        if ($transaction_user_count < 2) {
            if ($transaction_room_id == null) {
                DB::table('transaction_user')
                ->insert([
                    ["user_id" => session('login_id'),"transaction_room_id" => $transaction_room_id + 1],
                    ["user_id" => $request->user_id,"transaction_room_id" => $transaction_room_id + 1]
                ]);
            } else {
                DB::table('transaction_user')
                ->insert([
                    ["user_id" => session('login_id'),"transaction_room_id" => $transaction_room_id],
                    ["user_id" => $request->user_id,"transaction_room_id" => $transaction_room_id]
                ]);
            }
        }
    }
}
