<?php

namespace App\Http\Controllers;
use App\Models\Reserve;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ReserveController extends Controller
{
        public function reserved(Request $request){
            if ($request->hasFile('image') && $request->file('image')->isValid()) {
                $image = $request->file('image');
                
                $extension = $image->getClientOriginalExtension();  
                $filename = time().'.'.$extension;
                $image->move('images/upload/', $filename);                                                                                                                                                               
                
                $reserve = new Reserve;
                $reserve->file = 'images/upload/'.$filename;
                $reserve->save();
                return response()->json([
                    'url' => asset('/images/upload/' . $filename),
                ]);
            }
            
                return response()->json(['error' => 'Invalid image'], 400);
            }

            public function getImage($id)
            {
                $photo = Reserve::findOrFail($id);
        
                $imagePath = $photo->file;

                return response($imagePath, 200);            
            }
}

