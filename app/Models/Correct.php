<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Correct extends Model
{
    protected $table = 'corrects';

    protected $fillable = [
        'books_id',
        'detail',
        'users_id',
        'created_at',
        'deleted_at',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function book()
    {
        return $this->belongsTo('App\Models\Book');
    }
}
