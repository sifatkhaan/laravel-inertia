<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\category;
use App\Models\Dimension;
use App\Models\Item;
use App\Models\Material;
use App\Models\Media;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($categoryId)
    {
        $category = category::with('items')->findOrFail($categoryId);
        $items = Item::where('category_id', $categoryId)->latest()->paginate(4);
        $allItems = Item::where('category_id', $categoryId)->get();
        return inertia('Category', [
            'items' => $items,
            'category' => $category,
            'adminItems'=>$allItems,
        ]);
    }

    public function adminIndex(Request $request) {

        $query = Item::latest();
        if ($request->has('search') && !empty($request->search)) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
        
        $allItems = $query->paginate(10);

        return inertia('Admin/ItemDetails/ItemList', [
            'adminItems' => $allItems,
            'search' => $request->search,
        ]);
    }


    public function create()
    {

        $categories = category::with('subcategories:id,name,category_id')->select('id', 'name')->get();
        return inertia('Admin/item-details/AddItem', [
            'categories' => $categories,
            'dimensions' => Dimension::select('id', 'height', 'width', 'depth')->get(),
            'authors' => Author::select('id', 'name')->get(),
            'materials' => Material::select('id', 'name')->get(),
            'media' => Media::select('id', 'name')->get(),
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:6048',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'is_portrait' => 'required|boolean',
            'video' => 'nullable|string|max:255',
            'subcategory_id' => 'nullable|exists:sub_categories,id',
            'media_id' => 'nullable|exists:media,id',
            'material_id' => 'nullable|exists:materials,id',
            'dimension_id' => 'nullable|exists:dimensions,id',
            'author_id' => 'nullable|exists:authors,id',
        ]);

        $categoryName = category::where('id', $request->category_id)->value('name');

        if ($categoryName === 'Pen Sketch') {
            $folderPath = '/images/art/sketch';
        } elseif ($categoryName === 'Water Color') {
            $folderPath = '/images/art/water-color';
        } else {
            $folderPath = '/images/random';
        }

        // if (!Storage::disk('public')->exists($folderPath)) {
        //     Storage::disk('public')->makeDirectory($folderPath);
        // }

        if ($request->hasFile('image')) {
            $fileName = time() . '_' . $request->file('image')->getClientOriginalName();
            $validated['image'] = $request->file('image')->storeAs($folderPath, $fileName, 'public');
        }
        if ($request->hasFile('video')) {
            $fileName = time() . '_' . $request->file('video')->getClientOriginalName();
            $validated['video'] = $request->file('video')->storeAs('/videoes/random', $fileName, 'public');
        }

        Item::create($validated);

        return redirect()->route('admin.item.create')->with('success', 'Item created successfully.');
    }


    public function show(Item $item)
    {
        $item->load(['category', 'material', 'media', 'author', 'author.authorRating', 'stock']);
        return inertia('ItemShow', ['item' => $item]);
    }


    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
