<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Search\Result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    public function store(Request $request)
    {
        $search_result = new Result();

        $search_result->name = $request->name;

        $search_result->save();
    }
}
