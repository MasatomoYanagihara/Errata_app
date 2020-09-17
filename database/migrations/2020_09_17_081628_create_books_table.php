<?php
        use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("books", function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('author')->nullable(); //著者
            $table->integer('publisher_id')->nullable(); //出版社
            $table->string('year_of_publication')->nullable(); //出版年
            $table->string('genre_id')->nullable(); //ジャンル
            $table->timestamps();
            $table->softDeletes();
                        

            //*********************************
                    // Foreign KEY [ Uncomment if you want to use!! ]
                    //*********************************
                        //$table->foreign("publisher_id")->references("id")->on("publishers");
                        //$table->foreign("genre_id")->references("id")->on("genres");



                        // ----------------------------------------------------
                        // -- SELECT [books]--
                        // ----------------------------------------------------
                        // $query = DB::table("books")
                        // ->leftJoin("publishers","publishers.id", "=", "books.publisher_id")
                        // ->leftJoin("genres","genres.id", "=", "books.genre_id")
                        // ->get();
                        // dd($query); //For checking
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("books");
    }
}
