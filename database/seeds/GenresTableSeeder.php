<?php

use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Genres')->insert(
            [
                [
                    'name'=>"コンピュータ",
                    'created_at'=>now(),
                ],
                [
                    'name'=>"ネットワーク",
                    'created_at'=>now(),
                ],
                [
                    'name'=>"データベース",
                    'created_at'=>now(),
                ],
                
            ]
        );
    }
}
