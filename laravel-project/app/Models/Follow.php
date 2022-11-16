<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    protected $table  = "follow_user";

    protected $fillable = [
        'user_id',
        'follwing'
    ];
}
