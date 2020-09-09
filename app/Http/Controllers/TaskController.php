<?php

 namespace App\Http\Controllers;

 use App\Task;

 class TaskController extends Controller
 {
     public function index()
     {
         return Task::all(); // Taskモデルから全件取得してリターン
     }

     public function show(Task $task)
     {
         return $task; // URLパラメータで受け取ったTaskモデルをリターン
     }
 }
