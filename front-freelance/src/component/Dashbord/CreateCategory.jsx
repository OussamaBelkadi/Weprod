import { useState } from "react";
import axiosPer from "../../view/axiosPer";
 function CreateCategory (){
    // Variable name declaration 
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image,setChoseImg] = useState(null);
    const [fileImage ,setImage] = useState({
                                                imageChose : null,
                                                image_url : null
                                            })
    // handle the image to display  
    const handleImageChose = (ev)=>{
       
        const file = ev.target.files[0];
       
        setChoseImg(file);

        const reader = new FileReader;
        
        reader.onload = ()=>{
            setImage({
                        ...fileImage,
                        imageChose:file,
                        image_url: reader.result
                    })
                   
                    ev.target.value = "";
        }  
            
           
        reader.readAsDataURL(file);
    }


    // Create Category
    const CreateCategory = async (ev)=>{
        
        ev.preventDefault();

        // Prepare FormData
        const formData = new FormData();

        formData.append('image', image);
        formData.append('category', category);
        formData.append('description', description)

        //  Send the request
        await axiosPer.post('/createcategory', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then(({data})=>{
   
            setCategory('');
            setChoseImg(null);
            setDescription('');
            setImage( {image:null, image_url: null})
            window.location.href = 'http://localhost:5173/dashbord/categories';
        })
    }

   return( 
    <>
        <h3 className="font-bold text-6xl text-white text-center mt-8">Add Category</h3>
        <div className="mt-10 sm:mx-auto sm:max-w-sm">
            <form method='POST' onSubmit={CreateCategory}>
                <label htmlFor="" className="block text-white mb-2">Image</label>
                {fileImage.image_url && (<img src={fileImage.image_url} alt="image of user" className="w-92 h-52 object-cover"/>)}
                {!fileImage.image_url && (<span className="bg-gray-200"></span>)}
                <button className="relative bg-gray-200 w-24 h-8 rounded-sm">
                    <input type="file"  className="absolute top-0 bottom-0 right-0 left-0 opacity-0" onChange={handleImageChose}/>
                    <p className="text-black">Photos</p>
                </button>
                <label className="block text-sm font-medium leading-6 text-white mt-4">
                    Category:
                </label>
                <div className="mt-2">
                    <input
                        id="category"
                        onChange={(e)=>{setCategory(e.target.value)}}
                        value={category}
                        name="category"
                        type="text"
                        placeholder='Category'
                        required
                        className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <label className="block text-sm font-medium leading-6 text-white mt-6">
                    Description:
                </label>
                <div className="mt-2">
                <textarea id="story" className="pl-2 pt-2" name="story" rows="5" cols="50" placeholder="Hero to hero" onChange={(ev)=>{setDescription(ev.target.value)}} value={description}>
                    
                </textarea>
                </div>

                {/* <button className="bg-gradient-to-r from-gray-400  via-gray-800 to-black text-white w-24 h-8 rounded-sm border border-white mt-4" type="submit">Create</button> */}
            </form>
        </div>
        

      
    </>
    
    )
}
export default CreateCategory 