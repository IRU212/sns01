<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = "transaction";

    protected $fillable = [
        "chat",
        "transaction_room",
        "user_id"
    ];
}
