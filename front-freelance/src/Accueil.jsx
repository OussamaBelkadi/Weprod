import Header from "./component/header"
import Popup from "./Popup"
import { useEffect, useState } from "react"
import AclImg from "./assets/image/Media-1300x743.jpg"
import { KeyIcon } from '@heroicons/react/24/solid'
import iconmedia from './assets/image/media.png'
import iconmarketing from './assets/image/marketing.png'
import iconit from './assets/image/it.png'
import axiosPer from "./view/axiosPer"
import AudioPlayer from "./component/AudioPlayer"
import Footer from "./component/footer"
export default function Accueil(){


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

    return(
        <>
            <Header/>

            <div className="relative w-full h-screen mt-10">

                <img src={AclImg} alt="" className="h-screen w-full"/>
                <span className="absolute top-0 bg-gradient-to-r z-10 from-black from-10% via-gray-900 to-transparent   w-full h-screen"></span>
                <div className=" absolute top-20 z-20 flex flex-col items-center  w-full ">
                    <div>
                        <h1 className="mt-3 font-bold text-9xl text-white"> Services Online </h1>
                    </div>
                    <div className="mt-6 ">
                        <h2 className="text-white w-[500px] text-7xl">Multy Services</h2>
                        <button className="mt-12 ml-48 bg-gradient-to-r from-blue-600 to-black text-white rounded border-2 font-bold text-xl border-white w-44 mx-auto h-10">Show Services</button>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col  justify-center gap-10 bg-gray-800 mt-10">

                <h4 className="text-4xl font-semibold text-center text-white pt-8">Let's realize your innovative digital projects together!</h4>
                <p className="text-center mx-20 text-white font-bold">Digital master plan, support, operational transformation, from IT consulting to project management, Stanley Digital brings you its digital advice as well as its technological and methodological expertise. At your disposal, business experts work to advance your projects, alongside or in support of your teams:</p>

                <div className="flex flex-wrap justify-center mt-10 gap-12">
                    <div className="flex flex-col items-center gap-2 h-28">
                        <img src={iconmedia} alt="" className="h-20 w-20"/>
                        <p className="font-bold text-white">We have the key to solve all probleme</p>    
                    </div>
                    <div className="flex flex-col items-center gap-2 h-28">
                        <img src={iconit} alt="" className="h-20 w-20"/>
                        <p className="font-bold text-white">We have the key to solve all probleme</p>    
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src={iconmarketing} alt="" />
                        <p className="font-bold text-white">We have the key to solve all probleme</p>    
                    </div>
                    <div className="flex flex-col items-center gap-2 h-28">
                        <img src={iconmedia} alt="" className="h-20 w-20"/>
                        <p className="font-bold text-white">We have the key to solve all probleme</p>    
                    </div>
                    <div className="flex flex-col items-center gap-2 h-28">
                        <img src={iconit} alt="" className="h-20 w-20"/>
                        <p className="font-bold text-white">We have the key to solve all probleme</p>    
                    </div>
                </div>

            </div>

        {/* card of product */}
        <h5 className="font-bold text-xl text-white text-center mt-20">Get the service now</h5>

        <div className="flex justify-center">
            
            <div className="bg-white w-80 mt-12 mx-8 shadow-lg rounded-lg overflow-hidden">
                <img
                    className="h-48 w-full object-cover"
                    src="../src/assets/image/test/pexels-pixabay-60504.jpg"
                    alt="Product"
                />
                <div className="p-6">
                    <h3 className="text-gray-900 font-medium text-lg mb-2">Security</h3>
                    <p className="text-gray-600 text-sm">E-commerce</p>
                    <div className="mt-4">
                    <span className="text-gray-900 font-semibold text-lg">$19.99</span>
                    <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>

            <div className="bg-white w-80 mt-12 mx-8 shadow-lg rounded-lg overflow-hidden">
                <img
                    className="h-48 w-full object-cover"
                    src="../src/assets/image/test/pexels-anna-shvets-4482900.jpg"
                    alt="Product"
                />
                <div className="p-6">
                    <h3 className="text-gray-900 font-medium text-lg mb-2">Marketing</h3>
                    <p className="text-gray-600 text-sm">Product Description</p>
                    <div className="mt-4">
                    <span className="text-gray-900 font-semibold text-lg">$19.99</span>
                    <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>

            <div className="bg-white w-80 mt-12 mx-8 shadow-lg rounded-lg overflow-hidden">
                <img
                    className="h-48 w-full object-cover"
                    src="../src/assets/image/test/pexels-lukas-590016.jpg"
                    alt="Product"
                />
                <div className="p-6">
                    <h3 className="text-gray-900 font-medium text-lg mb-2">Product Title</h3>
                    <p className="text-gray-600 text-sm">Product Description</p>
                    <div className="mt-4">
                    <span className="text-gray-900 font-semibold text-lg">$19.99</span>
                    <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>
        
        </div>


      
        <Footer/>



        </>
    )
}