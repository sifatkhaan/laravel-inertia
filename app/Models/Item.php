<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'image',
        'description',
        'category_id',
        'subcategory_id',
        'is_portrait',
        'media_id',
        'material_id',
        'dimension_id',
        'author_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
