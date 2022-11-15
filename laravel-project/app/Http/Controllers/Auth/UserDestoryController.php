<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin\User;
use Illuminate\Http\Request;

class UserDestoryController extends Controller
{
    public function destory(Request $request)
    {
        $user_id = session('user_id');
        User::where('id',$user_id)->delete();

        $request->session()->forget('login_id');
    }
}
