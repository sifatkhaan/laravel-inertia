<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return inertia('Home');
    }

    public function blogs()
    {
        $blogs = Blog::latest()->paginate(4);
        return inertia('Blog', ['blogs' => $blogs]);
        
    }


    public function create()
    {
        return inertia('Create');
    }

  
    public function store(Request $request)
    {
        sleep(2);
        $validatedData = $request->validate(
            [
                'title' => ['required', 'string', 'max:255'],
                'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:10048'],
                'body'  => ['required', 'string']
            ]
        );
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $path; 
        }

        Blog::create([
            'title' => $validatedData['title'],
            'image' => $validatedData['image'],
            'body'  => $validatedData['body'],
        ])->with('message', "Successfully Created the data");
    }

 
    public function show(Blog $blog)
    {
        return inertia('Show',['blog'=>$blog]);
    }

 
    public function edit(Blog $blog)
    {
        //
    }

   
    public function update(Request $request, Blog $blog)
    {
        //
    }


    public function destroy(Blog $blog)
    {
        //
    }
}
