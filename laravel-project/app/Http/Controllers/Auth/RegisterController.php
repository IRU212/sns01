<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    // public function index(Request $request)
    // {
    //     $data = $request->session()->put('login_status','true');
    //     return response()->json($data);
    // }

    public function store(Request $request)
    {
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;

        // パスワードをハッシュ化
        $user->password = Hash::make($request->password);

        $user->save();

        // 最新のusera.idを取得
        $login_id = $user->latest()->pluck('id')->first();

        if ($user->save() == true) {
            // ログイン中のsessionを作成
            session(['login_id' => $login_id]);
        }
    }
}
