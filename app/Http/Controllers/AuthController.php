<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
        return inertia('Auth/Login');
    }

    public function login(Request $request){
        // var_dump($request);
        $credentials = $request->validate([
            'email'=>'required| email',
            'password'=>'required| min:6',
        ]);
        if(Auth::attempt($credentials)){
            $user= Auth::user();
            return redirect()->route($user->role === 'admin' ? 'admin.dashboard' : 'index');
        }

        return back()->withErrors(['email'=> 'Invalid credentials']);
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('index');
    }
}
