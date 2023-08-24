import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../Context/contextHome"
import axiosPer from "./axiosPer";
import iconmedia from '../assets/image/media.png'
import iconmarketing from '../assets/image/marketing.png'
import iconit from '../assets/image/it.png'
 import MessageIcon from "../component/MessageIcon ";
import { useState, useEffect } from "react";
function Dashbord(){
    const {setUserToken,userToken, setCurrentUser} = useStateContext();
    const [ter, setTer] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    // if (!userToken) {
    //     return <Navigate to="/login"/>
    // }
    const imageId = 1;
    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await fetch(`/images/${imageId}`);
            const imageData = await response.blob();
    
            const imageUrl = URL.createObjectURL(imageData);
            setImageUrl(imageUrl);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchImage();
      }, []);

    function logout(ev){
        ev.preventDefault();
        axiosPer.post('/logout').then(({data})=>{
            setUserToken(null);
            setCurrentUser({});
        }).catch((error)=>{
            console.log(error);
        })
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (selectedFile) {
          try {
            const response = await uploadImage(selectedFile);
            console.log(response.data.url); // Handle the response from the API
            setImageUrl(response.data.url)
          } catch (error) {
            console.error(error);
          }
        }
      };
    
      const uploadImage = (file) => {
        const formData = new FormData();
        formData.append('image', file);
    
        return axiosPer.post('/reserve', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      };
  
    // const handleSubmit = (file) => {
    //   file.preventDefault();
    //   const formData = new FormData();
    //   formData.append('image', file);
    //   // Code to send the selectedFile to the database
    //   axiosPer.post('/reserve', formData,{ 
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     }}).then(({data})=>{
    //     SetImage(data.image)
    //   })
    // };
    
    
    return(
        <>
            <div className="bg-black flex justify-center">
           
            </div>
            <div className="flex place-content-end w-full items-center gap-4">
                <MessageIcon />  
                <span className="rounded-full bg-gray-300 h-14 w-14 mr-4 mt-2"></span>
                  
            </div>
         
              
            
                
            <div className="fixed top-0 l-0 h-screen w-14 bg-slate-500 flex flex-col items-center justify-center gap-14">
                

                   <Link to={'/dashbord/categories'}> <img src={iconmedia} className="w-10" alt="" /></Link>
                    <Link to={'/dashbord'}><img src={iconmarketing} className="w-10" alt=""/></Link>
                    <Link to={'/dashbord/requests'}><img src={iconit} className="w-10" alt=""/></Link>
                    <img src={iconmarketing} className="w-10" alt="" />
                    <img src={iconit} className="w-10" alt="" onClick={logout}/>

                
            </div>
            
            <div className="ml-24">
                <Outlet/>
                {/* <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button className="bg-white rounded-sm w-22" type="submit">Upload</button>
                </form> */}
            </div>
            
        </>
    )

}
export default Dashbord