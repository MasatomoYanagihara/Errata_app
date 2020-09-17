<?php

use Illuminate\Database\Seeder;

class PublishersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Publishers')->insert(
            [
                [
                    'name'=>"オライリー",
                    'created_at'=>now(),
                ],
                [
                    'name'=>"技術評論社",
                    'created_at'=>now(),
                ]
            ]
        );
    }
}
