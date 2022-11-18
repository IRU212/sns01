<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Search\Result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function index()
    {
        $search_result = new Result();

        $data = $search_result::where('user_id',session('login_id'))->limit(5)->get();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $search_result = new Result();

        $search_result->name = $request->name;
        $search_result->user_id = session('login_id');

        $search_result->save();
    }
}
