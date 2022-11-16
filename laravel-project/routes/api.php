<?php

use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserDestoryController;
use App\Http\Controllers\ConfirmController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\LoginuserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SituationCOntroller;
use App\Http\Controllers\TransactionchatController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TransactionJudjemntController;
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

// アカウント削除
Route::get('/user/destory',[UserDestoryController::class,'destory']);
Route::post('/user/destory',[UserDestoryController::class,'destory']);

// 商品一覧
Route::get('/product',[ProductController::class,'index'])->name('product.index');

// 商品を出品
Route::get('/product/store',[ProductController::class,'store'])->name('product.store');
Route::post('/product/store',[ProductController::class,'store'])->name('product.store');

// 商品詳細
Route::get('/product/{id}',[ProductController::class,'show'])->name('product.show');

// 商品取引中判定
Route::get('/product/transaction/{id}',[TransactionJudjemntController::class,'index'])->name('product.transaction.index');

// ユーザプロフィール
Route::get('/profile/{id}',[ProfileController::class,'index'])->name('profile.index');

// 購入手続き部屋作成
Route::get('/transaction_room/{id}/store',[TransactionController::class,'room_store']);
Route::post('/transaction_room/{id}/store',[TransactionController::class,'room_store']);

// 購入手続き部屋ユーザ作成
Route::get('/transaction_user/store',[TransactionController::class,'user_store']);
Route::post('/transaction_user/store',[TransactionController::class,'user_store']);

// 購入手続き部屋チャット機能
Route::get('/transaction/chat/{id}/index',[TransactionchatController::class,'index']);
Route::get('/transaction/chat/{id}/store',[TransactionchatController::class,'store']);
Route::post('/transaction/chat/{id}/store',[TransactionchatController::class,'store']);

// 購入商品情報
Route::get('/purchase/{id}/index',[PurchaseController::class,'index']);

// 購入
Route::get('/purchase/{id}/store',[PurchaseController::class,'store']);
Route::post('/purchase/{id}/store',[PurchaseController::class,'store']);

// 商品到着
Route::get('/confirm/{id}/store',[ConfirmController::class,'store']);
Route::post('/confirm/{id}/store',[ConfirmController::class,'store']);

// 商品取引状況
Route::get('/situation/index',[SituationCOntroller::class,'index']);

// 商品いいね機能
Route::get('/like/{id}/index',[LikeController::class,'index']);
Route::get('/like/{id}/store',[LikeController::class,'store']);
Route::post('/like/{id}/store',[LikeController::class,'store']);
Route::get('/unlike/{id}/store',[LikeController::class,'destroy']);
Route::post('/unlike/{id}/store',[LikeController::class,'destroy']);

// フォロー機能
Route::get('/follow/{id}/index',[FollowController::class,'index']);
Route::get('/follow/{id}/store',[FollowController::class,'store']);
Route::post('/follow/{id}/store',[FollowController::class,'store']);
Route::get('/unfollow/{id}/store',[FollowController::class,'destroy']);
Route::post('/unfollow/{id}/store',[FollowController::class,'destroy']);

// 未ログイン時にログインページ


// 管理者権限ログイン
Route::get('/admin',[LoginController::class,'index']);
