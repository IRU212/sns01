<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index($id)
    {
        $data = Product::where('user_id',$id)->orderBy('id','desc')->get();
        return response()->json($data);
    }
}
