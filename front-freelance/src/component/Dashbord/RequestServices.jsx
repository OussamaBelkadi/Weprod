import { useEffect, useState } from "react"
import axiosPer from "../../view/axiosPer";
import { LockOpenIcon, TrashIcon, ViewColumnsIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";


export default function RequestServices(){

    const [services , setServices] = useState([]);

    const getAllrequest = async ()=>{
        await axiosPer.get("/requests").then(({data})=>{
            setServices(data)
            console.log(data)
        })
    }

    useEffect(()=>{
        getAllrequest()
    },[getAllrequest])


    // Handle th chose of request Client
        const handleChose =(id)=>{
            localStorage.setItem('id', id);
            window.location.href =('/dashbord/request')
        }
        let i = 1;
    
    return(
        <div>
            <div className="text-center my-12">
                <h3 className="font-semibold text-6xl text-white">Table for all Request Clients</h3>
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
                        
                            {services.map((service)=>(
                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.id}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Request 
                                    </td>
                                    
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-lg overflow-x-scroll">
                                    {service.file} 
                                    </td>

                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">     
                                        <button className="bg-transparent ml-2"  onClick={()=>handleChose(service.id)}>                                
                                            <ViewColumnsIcon className="w-8 h-8 bg-green-500 z-0 cursor-pointer"/>
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