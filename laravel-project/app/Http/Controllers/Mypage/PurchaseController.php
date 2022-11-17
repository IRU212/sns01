<?php

namespace App\Http\Controllers\Mypage;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    public function index()
    {
        $intermediate = User::find(session('login_id'))->transaction_rooms()->get();
        $product = New Product();

        $data = [];
        foreach ($intermediate as $index => $item) {
            $product_id = $item->product_id;
            $data[] = $product->find($product_id);
        }

        return response()->json($data);
    }
}
