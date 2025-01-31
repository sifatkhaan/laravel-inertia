<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BlogController::class, 'index']);
Route::get('/blog-list', [BlogController::class, 'blogs'])->name('blogs.list');
Route::resource('blogs', BlogController::class)->except('index');
Route::resource('items', ItemController::class)->except('index');
Route::get('/category/{id}', [CategoryController::class, 'index'])->name('categories.index');
