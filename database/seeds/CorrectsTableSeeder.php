<?php

use Illuminate\Database\Seeder;

class CorrectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Corrects')->insert(
            [
                [
                    'books_id'=>1,
                    'detail'=>"ここ",
                    'users_id'=>1
                ],
                [
                    'books_id'=>2,
                    'detail'=>"ここ",
                    'users_id'=>3
                ],
                [
                    'books_id'=>3,
                    'detail'=>"ここ",
                    'users_id'=>4
                ],
            ]
        );
    }
}
