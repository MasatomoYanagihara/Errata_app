
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
						$table->integer('books_id');
						$table->string('detaile'); //正誤情報
						$table->integer('users_id');
						$table->timestamps();



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
    