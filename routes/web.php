<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

Route::get('/kalendarz', function () {
    return Inertia::render('Calendar/Index');
})->name('calendar.index');

Route::get('/technik', function () {
    return Inertia::render('Technician/Index');
})->name('technician.index');
