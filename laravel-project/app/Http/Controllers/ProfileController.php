<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index($id)
    {
        $user = new User();
        $data = $user->with('follow')->find($id);

        return response()->json($data);
    }
}
