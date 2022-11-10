<?php

use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\LoginuserController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ユーザログイン新規登録機能
Route::get('auth/register/store',[RegisterController::class,'store'])->name('auth.register.store');
Route::post('auth/register/store',[RegisterController::class,'store'])->name('auth.register.store');

// ユーザログイン機能
Route::get('/login/user/store',[LoginuserController::class,'store']);
Route::post('/login/user/store',[LoginuserController::class,'store']);

// ユーザログアウト機能
Route::get('/logout/user/store',[LogoutController::class,'store']);
Route::post('/logout/user/store',[LogoutController::class,'store']);

// ログイン中のユーザ情報を取得
Route::get('login/user',[LoginuserController::class,'index']);

// 商品を出品
Route::get('/product/store',[ProductController::class,'store'])->name('product.store');
Route::post('/product/store',[ProductController::class,'store'])->name('product.store');
