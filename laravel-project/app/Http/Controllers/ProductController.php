<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $data = Product::orderBy('id','desc')->get();
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

    public function show($id)
    {
        $product = new Product();
        $data = $product->with('user')->find($id);

        return response()->json($data);
    }

    public function edit(Request $request,$id)
    {
        $product = new Product();

        if ($request->name == null) {
            $product_name = $product->find($id)->name;
        } else {
            $product_name = $request->name;
        }

        if ($request->introduce == null) {
            $product_introduce = $product->find($id)->introduce;
        } else {
            $product_introduce = $request->introduce;
        }

        if ($request->image == null) {
            $product_image_path = $product->find($id)->image_path;
        } else {
            $image = $request->image;

            // ディレクトリ名
            $dir = "image";

            //ファイル名を取得
            $file_name = $image->getClientOriginalName();

            // imageディレクトリに画像を保存
            $image->storeAs('public/' . $dir, $file_name);

            $product_image_path = "/storage/image/" . $file_name;
        }

        if ($request->money == null) {
            $product_money = $product->find($id)->money;
        } else {
            $product_money = $request->money;
        }

        if ($request->genre_id == null) {
            $product_genre_id = $product->find($id)->genre_id;
        } else {
            $product_genre_id = $request->genre_id;
        }

        $product->where('id',$id)->update([
            'name' => $product_name,
            'introduce' => $product_introduce,
            'image_path' => $product_image_path,
            'money' => $product_money,
            'genre_id' => $product_genre_id,
        ]);
    }
}
