<?php

namespace App\Http\Controllers;

use App\Models\Transactionroom;
use App\Models\Transactionuser;
use Illuminate\Http\Request;

class TransactionJudjemntController extends Controller
{
    public function index($id)
    {
        $transaction_room_id = Transactionroom::where('product_id',$id)->pluck('id')->first();
        $user_id = session('login_id');

        // ログイン中のユーザが取引済み
        $is_user = Transactionuser::where('transaction_room_id',$transaction_room_id)->where('user_id',$user_id)->exists();
        $is_room = Transactionroom::where('product_id',$id)->exists();

        if ($is_user == true) {
            return response()->json(true);
        } else if($is_room == true && $is_user == false){
            return response()->json(false);
        } else {
            return response()->json(true);
        }
    }
}
