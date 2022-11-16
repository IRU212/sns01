<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginuserController extends Controller
{
    public function index(Request $request)
    {
        $login_id = session('login_id');

        if ($request->session()->has('login_id')) {
            $data = User::with('follow')->find($login_id);
        } else {
            $data = 1;
        }

        return response()->json($data);
    }

    public function store(Request $request)
    {
        // ユーザ情報を取得
        $user_info = User::all();

        // 管理者ログイン
        $admin_user = \App\Models\Admin\User::all();

        // HTTPリクエストを受け取り
        $login_name = $request->name;
        $login_password = $request->password;

        // 管理者ログイン
        foreach ($admin_user as $index => $item) {

            // 管理者ユーザ名とパスワードが一致しているものを検索
            if ($login_name == $item['name'] && password_verify($login_password, $item['password'])) {
                // 一致しているusers.idをsessionに保存
                $admin_id = $item['id'];
                session([
                    'admin_id' => $admin_id,
                    'admin_login' => 1 // 1をログイン成功
                ]);

                // // 管理者ログイン成功したら処理を終了
                // exit();
            }
        }

        // 一般ユーザログイン
        foreach ($user_info as $index => $item) {

            // ユーザ名とパスワードが一致しているものを検索
            if ($login_name == $item['name'] && password_verify($login_password, $item['password'])) {
                // 一致しているusers.idをsessionに保存
                $login_id = $item['id'];
                session(['login_id' => $login_id]);
            }
        }
    }
}
