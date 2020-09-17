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
                    'book_id'=>1,
                    'detail'=>"ここ",
                    'user_id'=>1
                ],
                [
                    'book_id'=>2,
                    'detail'=>"ここ",
                    'user_id'=>3
                ],
                [
                    'book_id'=>3,
                    'detail'=>"ここ",
                    'user_id'=>4
                ],
            ]
        );
    }
}
