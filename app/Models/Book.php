<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    public function category()
    {
        return $this->hasOne('App\Category', 'id', 'categories_id');
    }

    protected $fillable = [
        'title',
        'author',
        'publish_id',
        'year_of_publication',
        'ganre_id',
        'created_at',
        'updata_at',
    ];

    public function correct()
    {
        return $this->hasMany('App\Models\Correct', 'id', 'books_id');
    }

    public function publisher()
    {
        return $this->belongsTo('App\Models\Publisher');
    }

    public function genre()
    {
        return $this->belongsTo('App\Models\Genre');
    }
}
