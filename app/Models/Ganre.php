<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ganre extends Model
{
    protected $table = 'genres';

    protected $fillable = [
        'title',
        'author',
        'publish_id',
        'year_of_publication',
        'ganre_id',
        'created_at',
        'updata_at',
    ];

    public function book()
    {
        return $this->hasMany('App\Models\Book', 'id', 'genre_id');
    }
}
