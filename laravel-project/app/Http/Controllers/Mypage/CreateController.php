<?php

namespace App\Http\Controllers\Mypage;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    public function index()
    {
        $data = Product::where('user_id',session('login_id'))->get();
        return response()->json($data);
    }
}
