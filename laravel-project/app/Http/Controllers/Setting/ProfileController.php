<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function store(Request $request)
    {
        $user_id = session('login_id');

        // ディレクトリ名
        $dir = "image";

        if (!$request->icon_image == '') {
            $icon_image = $request->icon_image;
            // ファイル名を取得
            $icon_name = $icon_image->getClientOriginalName();

            $icon_image->storeAs('public/' . $dir , $icon_name);

            // db保存path
            $icon_path = "/storage/image/" . $icon_name;
        } else {
            $icon_path = User::where('id',$user_id)->pluck('icon_path')->first();
        }

        User::where('id',$user_id)->update([
            'name' => $request->name,
            'email' => $request->email,
            // 'first_name' => $request->first_name,
            // 'last_name' => $request->last_name,
            // 'first_name_kana' => $request->first_name_kana,
            // 'last_name_kana' => $request->last_name_kana,
            'icon_path' => $icon_path,
            // 'back_path' => $request->back_path,
            // 'birthday' => $request->birthday,
            // 'zip' => $request->zip,
            // 'address' => $request->address
        ]);
    }
}
