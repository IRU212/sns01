<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index($id)
    {
        $follow = new Follow();

        // ログイン中Id
        $user_id = session('login_id');

        $following_count = $follow->where('user_id',$id)->count();
        $follower_count = $follow->where('followig',$id)->count();

        return response()->json([
            'is_follow' => $follow->where('user_id',$user_id)->where('followig',$id)->exists(),
            'following_count' => $following_count,
            'follower_count' => $follower_count
        ]);
    }

    public function store($id)
    {
        $follow = New Follow();

        $follow->user_id = session('login_id');
        $follow->followig = $id;

        $follow->save();
    }

    public function destroy($id)
    {
        Follow::where('user_id',session('login_id'))->where('followig',$id)->delete();
    }
}
