<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\ReserveController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ServiceController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/signup', [AuthenticateController::class, "signup"]);
Route::post('/login', [AuthenticateController::class, "login"]);
// Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout', [AuthenticateController::class , 'logout']);
    Route::post('/reserve', [ReserveController::class , 'reserved']);
    Route::get('/images/{id}', [ReserveController::class, 'getImage']);

    Route::post('/createcategory', [CategoryController::class, 'create']);
    Route::get('/getCategory', [CategoryController::class, 'getCategory']);
    Route::delete('/deletecategory/{id}', [CategoryController::class, 'categoryRemove']);

    Route::post('/service', [ServiceController::class, 'save']);
    Route::get('/audio/{id}', [ServiceController::class, 'getAudio']);
    Route::get('/requests', [ServiceController::class, 'getAllRequest']);
// });

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
