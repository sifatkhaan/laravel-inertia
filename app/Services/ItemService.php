<?php

namespace App\Services;

use App\Models\category;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemService
{
    public function storeItem(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:6048',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'is_portrait' => 'required|boolean',
            'video' => 'nullable|file|mimes:mp4,mov,avi|max:302400',
            'subcategory_id' => 'nullable|exists:sub_categories,id',
            'media_id' => 'nullable|exists:media,id',
            'material_id' => 'nullable|exists:materials,id',
            'dimension_id' => 'nullable|exists:dimensions,id',
            'author_id' => 'nullable|exists:authors,id',
        ]);

        $categoryName = category::where('id', $request->category_id)->value('name');
        $folderPath = match ($categoryName) {
            'Pen Sketch' => '/images/art/sketch',
            'Water Color' => '/images/art/water-color',
            default => '/images/random',
        };

        if ($request->hasFile('image')) {
            $fileName = time() . '_' . $request->file('image')->getClientOriginalName();
            $validated['image'] = $request->file('image')->storeAs($folderPath, $fileName, 'public');
        }

        if ($request->hasFile('video')) {
            $videoPath = $request->file('video')->store('videos', 'public');
            $validated['video'] = $videoPath;
        }

        return Item::create($validated);
    }

    public function uploadVideo(Request $request)
    {
        $request->validate([
            'video' => 'required|file|mimes:mp4,mov,avi|max:302400',
        ]);
        $path = $request->file('video')->store('videoes', 'public');
        return asset('storage/' . $path);
    }
}
