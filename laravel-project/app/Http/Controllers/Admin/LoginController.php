<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        $admin_user = new User();

        return response()->json([
            'admin_user_info' => $admin_user::find(session('admin_id')),
            'admin_login_success' => session('admin_login')
        ]);
    }
}
