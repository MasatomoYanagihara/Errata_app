<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', 'TaskController@index'); // /api/tasks/
Route::post('/tasks', 'TaskController@store');

Route::get('/tasks/{task}', 'TaskController@show');
