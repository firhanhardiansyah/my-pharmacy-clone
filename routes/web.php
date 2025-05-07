<?php
use App\Http\Controllers\FormulaController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('formulas', [FormulaController::class, 'index']);
    Route::post('/formulas', [FormulaController::class, 'store'])->name('formulas.store');
    Route::put('/formulas/{formula}', [FormulaController::class, 'update'])->name('formulas.update');
    Route::delete('/formulas/{id}', [FormulaController::class, 'destroy'])->name('formulas.delete');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
