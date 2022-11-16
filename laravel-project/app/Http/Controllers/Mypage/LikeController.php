<?php

namespace App\Http\Controllers\Mypage;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index()
    {
        $data = User::find(session('login_id'))->products()->get();

        return response()->json($data);
    }
}
