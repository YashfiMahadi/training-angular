<?php

use App\Http\Controllers\FoodController;
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

Route::get('/food', [FoodController::class, 'index']);
Route::get('/food/{id}/show', [FoodController::class, 'show']);
Route::post('/food/store', [FoodController::class, 'store']);
Route::get('/food/{id}/update', [FoodController::class, 'update']);
Route::get('/food/{id}/delete', [FoodController::class, 'delete']);
