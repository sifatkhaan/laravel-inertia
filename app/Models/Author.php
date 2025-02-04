<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    protected $fillable =['name', 'phone','email','image'];

    public function items()
    {
        return $this->hasMany(Item::class, 'author_id');
    }
    public function authorRating()
    {
        return $this->hasOne(AuthorRating::class, 'author_id');
    }
}
