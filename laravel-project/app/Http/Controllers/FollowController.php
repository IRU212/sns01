<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index()
    {

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
