<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function create(Request $request){
        
        $category = new Category;
        $category->category = $request->category;
        $category->description = $request->description;

        if($request->hasFile('image')){
            $image = $request->file('image');
            
            $extension = $image->getClientOriginalExtension();

            $filename = time().'.'.$extension;
            $pathImage =$image->store('images', 'public');

            
            $category->image = $pathImage;

        }else{
            $category->image = 'null';
        }
            $category->save();
            
            return response(['category' => 'category is created']);
    }

    public function getCategory(){
        $categories = Category::all();
        $image = [];
        
        foreach ($categories as  $cat) {
            $cat->image = asset('/storage/'.$cat->image);

        }
        return response()->json($categories);
    }
    

    public function categoryRemove($id){
        
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
            $category->delete();

            return response()->json(['success'=> 'The category is removed']);
       
       
    }
}
