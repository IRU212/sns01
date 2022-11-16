<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

    protected $fillable = [
        'name',
        'introduce',
        'money',
        'situation_id',
        'genre_id',
        'user_id'
    ];

    public function situation()
    {
        return $this->belongsTo(Situation::class)->withDefault();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
