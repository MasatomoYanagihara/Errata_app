<?php

 use App\Task;
 use Illuminate\Database\Seeder;

 class TasksTableSeeder extends Seeder
 {
     /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
         DB::table('Tasks')->insert(
             [
                [

                 'title'=>"title1",
                 'content'=>"content1",
                 'person_in_charge'=>"person_in_charge1",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title2",
                 'content'=>"content2",
                 'person_in_charge'=>"person_in_charge2",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title3",
                 'content'=>"content3",
                 'person_in_charge'=>"person_in_charge3",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title4",
                 'content'=>"content4",
                 'person_in_charge'=>"person_in_charge4",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title5",
                 'content'=>"content5",
                 'person_in_charge'=>"person_in_charge5",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title6",
                 'content'=>"content6",
                 'person_in_charge'=>"person_in_charge6",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title7",
                 'content'=>"content7",
                 'person_in_charge'=>"person_in_charge7",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
                [

                 'title'=>"title8",
                 'content'=>"content8",
                 'person_in_charge'=>"person_in_charge8",
                 'created_at' => now(),
                 'updated_at' => now(),
                ],
            ]
         );
     }
 }
