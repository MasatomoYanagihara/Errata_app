<?php

 namespace App\Http\Controllers\Api;

 use App\Models\Task;
 use Illuminate\Http\Request;
 use App\Http\Controllers\Controller;

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

     public function destroy(Task $task)
     {
         $task->delete();
         return $task;
     }

     public function serchBook(Request $request)
     {
         $title = $request->input('title');
         $serchBook = Task::where('title', '=', $title)
            ->select("id", "title", "content")
            ->get();
         return $serchBook;
     }
 }