import { useCallback, useEffect, useState } from "react"
import axiosPer from "../../view/axiosPer"
import { TrashIcon } from "@heroicons/react/24/solid";


export default function GetAllCategories(){
    const [categories, setCategories] = useState([])




     const getAllCategories = useCallback(() => {
        axiosPer('/getCategory').then(({data})=>{
            console.log(data)
            setCategories(data)})
  }, []);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);
    const handleDelete =  useCallback(async (id) => {
        
        axiosPer.delete(`/deletecategory/${id}`).then(({data})=>{   
            
        })
        await getAllCategories()
        alert(data.success)

    },[]);


    return(
       
      <div>

        <div className="text-center my-12">
            <h3 className="font-semibold text-6xl text-white">Table for all categories</h3>
        </div>
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Categories
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Descriptions
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Handle
                    </th>
                    </tr>
                </thead>
                <tbody>
                
                    {categories.map((category)=>(
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {category.category}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-lg overflow-x-scroll">
                           {category.description}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button className="bg-transparent"  onClick={()=>handleDelete(category.id)}>                                
                                <TrashIcon className="w-8 h-8 bg-red-500 z-0 cursor-pointer"/>
                            </button>

                        </td>
                        </tr>
                    ))}
                    


                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}