<?php

 namespace App\Http\Controllers\Api;

 use App\Models\Task;
 use App\Models\Book;
 use Illuminate\Http\Request;
 use App\Http\Controllers\Controller;

 class TaskController extends Controller
 {
     public function index()
     {
         //  return Book::all(); // Taskモデルから全件取得してリターン
         return Book::with('publisher')->get();
     }

     public function store(Request $request)
     {
         return Task::create($request->all()); // リクエストで受け取ったデータを登録
     }

     public function show(Book $task)
     {
         return $task; // URLパラメータで受け取ったBookモデルをリターン
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
     //  public function serchBook(Request $request)
    //  {
    //      $title = $request->input('title');
    //      $serchBook = Task::where('title', '=', $title)
    //         ->select("id", "title", "content")
    //         ->get();
    //      return $serchBook;
    //  }
 }
