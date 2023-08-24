<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;


class AuthenticateController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'roll' => $data['roll'],
            'image' => $data['image']
        ]);
    
            $token  =$user->createToken('main')->plainTextToken;
    
            return response([
                'user' => $user,
                'token' => $token
            ]);
       }

       public function login(LoginRequest $request){
            $data = $request->validated();

            if(!Auth::attempt($data)){
                return response(['error'=>'Email or Password is not correct']);
            }

            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;

            return response(['user'=>$user, 'token'=> $token]);
       }

       public function logout(Request $request){

            $user = Auth::user();
            
           $user->currentaccessToken()->delete();

            return response([
                'success' => ' Logout successfully'
            ], 201);
       }
}
