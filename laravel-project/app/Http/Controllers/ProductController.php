<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $data = Product::all();
        return response()->json($data);
    }

    /**
     * $product->save();
     *
     * DBに保存
     *
     * @return void
     */
    public function store(Request $request)
    {
        $product = new Product();

        $image = $request->image;

        // ディレクトリ名
        $dir = "image";

        //ファイル名を取得
        $file_name = $image->getClientOriginalName();

        // imageディレクトリに画像を保存
        $image->storeAs('public/' . $dir, $file_name);

        $product->name = $request->name;
        $product->introduce = $request->introduce;
        $product->image_path = "/storage/image/" . $file_name;
        $product->money = $request->money;
        $product->genre_id = $request->genre_id;
        $product->user_id = session('login_id');

        $product->save();
    }
}
