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

        // 保存するデータ
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password); // パスワードをハッシュ化
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->first_name_kana = $request->first_name_kana;
        $user->last_name_kana = $request->last_name_kana;
        // $user->icon_path = $request->icon_path;
        // $user->back_path = $request->back_path;
        $user->birthday = $request->birthday;
        $user->zip = $request->zip;
        $user->address = $request->address;

        $user->save();

        // 最新のusera.idを取得
        $login_id = $user->latest()->pluck('id')->first();

        if ($user->save() == true) {
            // ログイン中のsessionを作成
            session(['login_id' => $login_id]);
        }
    }
}
