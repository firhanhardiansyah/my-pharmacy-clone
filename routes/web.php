<?php
use App\Http\Controllers\FormulaController;
use App\Http\Controllers\MedicalServiceController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\FactoryController;
use App\Http\Controllers\SupplierController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::apiResource('formulas', FormulaController::class);
    Route::apiResource('medical-services', MedicalServiceController::class);
    Route::apiResource('units', UnitController::class);
    Route::apiResource('factories', FactoryController::class);
    Route::apiResource('suppliers', SupplierController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
