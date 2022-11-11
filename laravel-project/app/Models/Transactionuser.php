<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactionuser extends Model
{
    protected $table = "transaction_user";

    protected $fillable = [
        "transaction_room_id",
        "user_id"
    ];
}
