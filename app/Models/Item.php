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
        'video',
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
    public function media()
    {
        return $this->belongsTo(Media::class, 'media_id', 'id');
    }
    public function material()
    {
        return $this->belongsTo(Material::class, 'material_id', 'id');
    }
    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id');
    }
    public function sale()
    {
        return $this->hasMany(Sale::class, 'item_id');
    }
    public function itemStock()
    {
        return $this->hasMany(ItemStock::class);
    }
    public function stock()
    {
        return $this->hasOne(ItemStock::class, 'item_id');
    }
}
