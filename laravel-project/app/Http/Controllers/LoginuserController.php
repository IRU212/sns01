<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginuserController extends Controller
{
    public function index()
    {
        $id = Auth::id();
        $data = User::find(1);

        return response()->json($data);
    }
}
