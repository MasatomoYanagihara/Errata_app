<?php

 namespace App\Http\Controllers;

 use App\Task;
 use Illuminate\Http\Request;

 class TaskController extends Controller
 {
     public function index()
     {
         return Task::all(); // Taskモデルから全件取得してリターン
     }

     public function store(Request $request)
     {
         return Task::create($request->all()); // リクエストで受け取ったデータを登録
     }

     public function show(Task $task)
     {
         return $task; // URLパラメータで受け取ったTaskモデルをリターン
     }

     public function update(Request $request, Task $task)
     {
         $task->update($request->all());
         return $task;
     }
 }
