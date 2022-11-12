<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $table = "purchase";

    protected $fillable = [
        "user_id",
        "purchase_id"
    ];
}
