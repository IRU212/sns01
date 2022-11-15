<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index($id)
    {
        $like = new Like();

        $user_id = session('login_id');

        $data = $like->where('user_id',$user_id)->where('product_id',$id)->first();

        if (!isset($data)) {
            $data = false;
        }

        return response()->json($data);
    }

    public function store($id)
    {
        $like = new Like();

        $like->user_id = session('login_id');
        $like->product_id = $id;

        $like->save();
    }

    public function destroy($id)
    {
        $like = new Like();

        $user_id = session('login_id');

        $like->where('user_id',$user_id)->where('product_id',$id)->delete();
    }
}
