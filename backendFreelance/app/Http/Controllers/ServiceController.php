<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
   public function save(Request $request){
    if ($request->hasFile('audio') && $request->hasFile('file')) {
        $audioFile = $request->file('audio');
        $path = $audioFile->store('audio', 'public');

        $fileDocs = $request->file('file');
        $pathDocs = $fileDocs->store('file', 'public');

        $service = new Service;
        $service->audio = $path;
        $service->file = $pathDocs;

        $service->save();
        
        return response()->json(['message' => 'Audio file stored successfully']);
    }
    
    return response()->json(['message' => 'No audio file found'], 400);
       
    }


    public function getAllRequest(){
        
        $requests = Service::all();

        if ($requests) {
            return response()->json($requests);
        }else{
            return response()->json(['error'=>"Don't have any Request"]);
        }
    }


    public function getAudio($id){
        
        $docs = Service::select('audio', 'file')->find($id);
        
        $audioPath = $docs->audio;
        $audioUrl = asset('/storage/' . $audioPath);

        $filePath = $docs->file;
        $fileUrl = asset('/storage/' . $filePath);
        return response()->json([
                                    "audioUrl" => $audioUrl,
                                    "fileUrl"  => $fileUrl
                                ]);
    }
}
