<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class videoController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'video' => 'required|file|mimes:mp4,mov,avi|max:302400',
        ]);

        // Store video in storage/app/public/videos
        $path = $request->file('video')->store('videoes', 'public');

        // Return the URL to store in the database
        return response()->json(['url' => asset('storage/' . $path)]);
    }
}


