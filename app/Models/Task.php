<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // $fillableに指定したカラムのみ、値が代入される。（ホワイトリスト）
    protected $fillable = [
        'title',
        'content',
        'person_in_charge',
    ];
}
