<?php

namespace App\Models\Search;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $table = "search_result";

    protected $fillable = [
        'name'
    ];
}
