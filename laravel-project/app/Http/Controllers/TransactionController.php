<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Transactionroom;
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
    public function store(Request $request,$id)
    {
        $transaction_room = new Transactionroom();
        $transaction_room->product_id = $id;
        $transaction_room->save();
    }
}
