export default function Footer(){

 
 
     return (
         <>
               <footer className="bg-gray-800 text-white mt-16">
                    <div className="container mx-auto py-4 flex flex-col justify-between gap-4 items-center">
                        <div className="block text-center">
                        <p className="text-lg">&copy; 2023 Services de qualite pour nos client contacter nous.</p>
                        </div>
                        <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            {/* Insert another social media icon here */}
                            <img src="../src/assets/image/fec.png" alt="" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            
                            {/* Insert another social media icon here */}
                            <img src="../src/assets/image/inst.png" alt="" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            {/* Insert another social media icon here */}
                            <img src="../src/assets/image/link.png" alt="" />
                        </a>
                        {/* Add more social media icons as needed */}
                        </div>
                    </div>
                </footer>
 
         </>
     )
 }