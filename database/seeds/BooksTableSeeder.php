<?php

use App\Models\Book;
use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        DB::table('Books')->insert(
            [
               [
                'title'=>"title1",
                'author'=>"author1",
                'publisher_id'=> 1,
                'year_of_publication' => "2019",
                'genre_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title2",
                'author'=>"author2",
                'publisher_id'=> 2,
                'year_of_publication' => "2017",
                'genre_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title3",
                'author'=>"author3",
                'publisher_id'=> 1,
                'year_of_publication' => "2019",
                'genre_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title4",
                'author'=>"author4",
                'publisher_id'=> 1,
                'year_of_publication' => "2015",
                'genre_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title5",
                'author'=>"author5",
                'publisher_id'=> 1,
                'year_of_publication' => "2019",
                'genre_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title6",
                'author'=>"author6",
                'publisher_id'=> 1,
                'year_of_publication' => "2017",
                'genre_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
               ],
               [
                'title'=>"title7",
                'author'=>"author7",
                'publisher_id'=> 1,
                'year_of_publication' => "2018",
                'genre_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
               ],
           ]
        );
    }
}
