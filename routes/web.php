<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SellController;
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

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard'); // Create this component
    })->name('admin.dashboard');
});
Route::get('/blog-list', [BlogController::class, 'blogs'])->name('blogs.list');
Route::resource('blogs', BlogController::class)->except('index');
Route::resource('items', ItemController::class)->except('index');
Route::get('/category/{id}', [CategoryController::class, 'index'])->name('categories.index');
// Route::get('/sell-item/{item}', [SellController::class, 'show'])->middleware('auth');
Route::get('/sell-item/{item}', [SellController::class, 'show']);
Route::post('/sell-item', [SellController::class, 'sellItem']);

