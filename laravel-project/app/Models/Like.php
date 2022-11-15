<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = "like_user";

    protected $fillable = [
        'user_id',
        'product_id'
    ];
}
