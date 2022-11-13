<?php

namespace App\Http\Controllers;

use App\Models\Transactionchat;
use App\Models\Transactionroom;
use Illuminate\Http\Request;

class TransactionchatController extends Controller
{
    public function index($id)
    {
        $transaction_chat = new Transactionchat();
        $transaction_room = new Transactionroom();

        // 商品の部屋IDを取得
        $transaction_room_id = $transaction_room->where('product_id',$id)->pluck('id')->first();

        // 送信データ
        $chat = $transaction_chat->where('transaction_room',$transaction_room_id)->get();
        $user_id = session('login_id');

        return response()->json([
            'chat' => $chat,
            'user_id' => $user_id
        ]);
    }

    public function store($id,Request $request)
    {
        $transaction_chat = new Transactionchat();
        $transaction_room = new Transactionroom();

        // 商品の部屋IDを取得
        $transaction_room_id = $transaction_room->where('product_id',$id)->pluck('id')->first();

        // チャット機能
        $transaction_chat->chat = $request->chat;
        $transaction_chat->transaction_room = $transaction_room_id;
        $transaction_chat->user_id = session('login_id');

        // 保存
        $transaction_chat->save();
    }
}
