<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function follow()
    {
        return $this->hasOne(Follow::class)->withDefault();
    }

    public function follows()
    {
        return $this->hasMany(Follow::class,'user_id')->withDefault();
    }

    public function products()
    {
        return $this->belongsToMany(Product::class,'like_user','user_id','product_id');
    }

    public function transaction_rooms()
    {
        return $this->belongsToMany(Transactionroom::class,'transaction_user','user_id','transaction_room_id');
    }
}
