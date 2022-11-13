<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactionchat extends Model
{
    protected $table = "transaction_chat";

    protected $fillable = [
        "chat",
        "transaction_room",
        "user_id"
    ];
}
