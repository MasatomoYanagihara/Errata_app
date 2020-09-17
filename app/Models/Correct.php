<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Correct extends Model
{
    protected $table = 'corrects';

    protected $fillable = [
        'books_id',
        'detail',
        'user_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id');
    }

    public function book()
    {
        return $this->belongsTo('App\Models\Book', 'id');
    }
}
