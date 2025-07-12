<?php

use App\Models\Skill;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('portfolio', [
//         'heroImage' => asset('images/hero-bg.jpg'),
//         'aboutImage' => asset('images/profile.jpg'),
//         'aboutText' => 'Write something about yourself...',
//         'skills' => Skill::get(),
//         'projects' => Project::all(),
//     ]);
// });

Route::get('/', function () {
    return view('react');
});
