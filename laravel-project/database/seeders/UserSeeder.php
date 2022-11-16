<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'aaa',
            'email' => 'aaa@aaa',
            'email_verified_at' => now(),
            'password' => Hash::make('aaa'), // password
            'remember_token' => Str::random(10),
            'first_name' => '山田',
            'last_name' => '太郎',
            'first_name_kana' => 'ヤマダ',
            'last_name_kana' => 'タロウ',
            'birthday' => date('2002_8_31'),
            'zip' => 4624864,
            'address' => " 宮崎県杉山市東区木村町山口5-5-9 ハイツ吉田109号"
        ]);
    }
}
