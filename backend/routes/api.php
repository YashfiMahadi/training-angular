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

Route::get('/foods', [FoodController::class, 'index']);
Route::get('/foods/{id}/show', [FoodController::class, 'show']);
Route::post('/foods/store', [FoodController::class, 'store']);
Route::put('/foods/{id}/update', [FoodController::class, 'update']);
Route::delete('/foods/{id}/delete', [FoodController::class, 'destroy']);
