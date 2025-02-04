<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthorRating extends Model
{
    use HasFactory;
    protected $fillable = ['author_id', 'rating'];
    public function author(){
        return $this->belongsTo(Author::class, 'author_id');
    }
}
