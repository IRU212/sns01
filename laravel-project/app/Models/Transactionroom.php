<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactionroom extends Model
{
    protected $table = "transaction_room";

    protected $fillable = [
        "product_id"
    ];
}
