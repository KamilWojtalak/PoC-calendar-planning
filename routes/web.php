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

// NOTE can rename to  /panel in the future, and conditionally render based on user role, but it is PoC
Route::get('/kierownik', function () {
    return Inertia::render('Calendar/Index');
})->name('dashboard.manager.index');

// NOTE can rename to  /panel in the future, and conditionally render based on user role, but it is PoC
Route::get('/technik', function () {
    return Inertia::render('Technician/Index');
})->name('dashboard.technician.index');

Route::get('/technik/zlecenie-serwisowe/szczegoly', function () {
    return Inertia::render('Technician/Services/Show');
})->name('dashboard.technician.services.show');

Route::get('/technik/zlecenie-serwisowe/start', function () {
    return Inertia::render('Technician/Services/Start');
})->name('dashboard.technician.services.start');

Route::get('/zlecenia-serwisowe/stworz', function () {
    return Inertia::render('Services/Create');
})->name('services.create');

Route::get('/zlecenia-serwisowe/{service}', function ($service) {
    // No validation its PoC
    return Inertia::render('Services/Show');
})->name('services.show');

Route::get('/technicy', function () {
    return Inertia::render('ServiceWorkers/Index');
})->name('service-workers.index');

Route::get('/klienci', function () {
    return Inertia::render('Clients/Index');
})->name('clients.index');

Route::get('/maszyny', function () {
    return Inertia::render('Machines/Index');
})->name('machines.index');
