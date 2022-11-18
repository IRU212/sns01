<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    public function index($keyword)
    {
        $product = new Product();

        $query = $product->query();

        if (!empty($keyword)) {
            $data = $query->where('name','LIKE',"%{$keyword}%")->orderBy('id','asc')->get();
        }

        return response()->json($data);
    }
}
