
    <?php
        use Illuminate\Support\Facades\Schema;
        use Illuminate\Database\Schema\Blueprint;
        use Illuminate\Database\Migrations\Migration;
        
        class CreateCorrectsTable extends Migration
        {
            /**
             * Run the migrations.
             *
             * @return void
             */
            public function up()
            {
                Schema::create("corrects", function (Blueprint $table) {

						$table->increments('id');
						$table->integer('book_id')->nullable();
						$table->string('detail')->nullable(); //正誤情報
						$table->integer('user_id')->nullable();
						$table->timestamps();
						$table->softDeletes();
						//$table->foreign("book_id")->references("id")->on("books");
						//$table->foreign("user_id")->references("id")->on("users");



						// ----------------------------------------------------
						// -- SELECT [corrects]--
						// ----------------------------------------------------
						// $query = DB::table("corrects")
						// ->leftJoin("books","books.id", "=", "corrects.book_id")
						// ->leftJoin("users","users.id", "=", "corrects.user_id")
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
                Schema::dropIfExists("corrects");
            }
        }
    