<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price', 10, 2);
            $table->string('image')->nullable(); 
            $table->text('description'); 
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade'); 
            $table->foreignId('subcategory_id')->nullable()->constrained('sub_categories')->onDelete('cascade'); 
            $table->boolean('is_portrait')->default(false);
            $table->foreignId('media_id')->nullable()->constrained('media')->onDelete('cascade'); 
            $table->foreignId('material_id')->nullable()->constrained('materials')->onDelete('cascade'); 
            $table->foreignId('dimension_id')->nullable()->constrained('dimensions')->onDelete('cascade');
            $table->foreignId('author_id')->nullable()->constrained('authors')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
