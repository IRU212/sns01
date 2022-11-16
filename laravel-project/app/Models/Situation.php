<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Situation extends Model
{
    protected $table = "situation";

    protected $fillable = [
        "situation_name"
    ];
}
