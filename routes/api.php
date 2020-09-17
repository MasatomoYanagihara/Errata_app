<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/tasks', 'Api\TaskController@index'); // /api/tasks/
Route::post('/tasks', 'Api\TaskController@store');

Route::get('/tasks/{task}', 'Api\TaskController@show');
Route::put('/tasks/{task}', 'Api\TaskController@update');
Route::delete('/tasks/{task}', 'Api\TaskController@destroy');

Route::get('/serch', 'Api\TaskController@serchBook');
