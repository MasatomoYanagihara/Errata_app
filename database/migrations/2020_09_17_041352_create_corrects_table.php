
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
						$table->integer('books_id')->nullable()->unsigned();
						$table->string('detail')->nullable(); //正誤情報
						$table->integer('users_id')->nullable()->unsigned();
						$table->timestamps();
						$table->softDeletes();
						//$table->foreign("books_id")->references("id")->on("books");
						//$table->foreign("users_id")->references("id")->on("users");



						// ----------------------------------------------------
						// -- SELECT [corrects]--
						// ----------------------------------------------------
						// $query = DB::table("corrects")
						// ->leftJoin("books","books.id", "=", "corrects.books_id")
						// ->leftJoin("users","users.id", "=", "corrects.users_id")
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
    