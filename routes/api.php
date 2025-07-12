<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Api\ProjectController;

Route::post('/contact', [ContactController::class, 'send']);
Route::get('/projects', [ProjectController::class, 'index']);
