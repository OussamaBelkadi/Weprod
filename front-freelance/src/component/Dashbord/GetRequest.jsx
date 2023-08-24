import axiosPer from "../../view/axiosPer";
import { useState, useEffect } from "react";

export default function GetRequest(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [audioUrl, setAudioUrl] = useState('');
    const [pdfUrl, setFileUrl] = useState('');
  
  useEffect(() => {
    const id = localStorage.getItem('id')
    // Simulating an API call to retrieve the URL from the database
    axiosPer.get(`/audio/${id}`).then(({data})=>{
        const Url = data;
        setAudioUrl(Url.audioUrl);
        setFileUrl(Url.fileUrl);
        console.log(id)
    })
  }, []);


    return(
        <div className="flex flex-col justify-center gap-10">

            <h3 className="font-semibold text-white text-6xl mx-auto mb-2">The Request Of Client</h3>

            <div className="flex flex-col item-center justify-center gap-4">
                <h5 className="text-white text-2xl font-normal mx-auto">The audio of client :</h5>
                <audio src={audioUrl} controls  className="w-96 mx-auto"/>
            </div>
                
            <div className="flex flex-col item-center justify-center gap-4">
                <h5 className="text-white font-normal text-2xl mx-auto">The document of client :</h5>
                <iframe src={pdfUrl} title="PDF Viewer" className="w-[700px] h-[600px] mx-auto"/>
            </div>

        </div>
    )

}