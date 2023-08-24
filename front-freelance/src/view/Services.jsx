import techn from '../assets/image/Tech-1300x742.jpg';
import design from '../assets/image/Design-1300x743.jpg';
import content from '../assets/image/Strategy-1300x743 (1).jpg';
import media from '../assets/image/Media-1300x743.jpg';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import { useEffect, useState } from 'react';
import axiosPer from './axiosPer';
import Footer from '../component/footer';
export default function Services(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [ca, setCategories]  = useState([]);

    const getCategory = ()=>{
        axiosPer.get('/getCategory').then(({data})=>{
             setCategories(data)
             console.log(ca)

        })
    }

    useEffect(()=>
    {
        getCategory()
    },[getCategory])
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return(
        <>
            <div className='pt-20'>
                <div className="w-full border-1 flex gap-4 justify-center items-center my-6 border-black rounded-sm">

                    <img src={design} alt="design collection h-full" className='w-[440px] h-80'/>
                    <div className="w-[650px] flex flex-col gap-24">
                        <Link to='SpachelService'><h1 className="relative font-bold text-4xl  text-white cursor-pointer" >Design</h1></Link>
                        <p className='text-white'>From digital platforms to branded experiences we have an understanding of cool and an insatiable appetite for all things pop culture.</p>
                        <Link to='SpachelService'><p className='font-bold text-white after:content-["-->"] after:ml-1 cursor-pointer'>Learn More</p></Link>
                    </div>
                    
                </div>
                
                <div onClick={handleOpenPopup} className=" w-full border-1 flex gap-4 justify-center items-center my-6 border-black rounded-sm">
                    
                        <img src={techn} alt="design collection" className='w-[440px] h-80'/>
                        <div className="w-[650px] flex flex-col gap-10">
                            <h1 className="relative font-bold text-4xl text-white cursor-pointer" >Technology</h1>
                            <p className='text-white'>With a robust skillset across our in-house development team, we understand that the demand for exceptional creative solutions expands beyond design aesthetics. Pixel perfection and functionality are core to our development ethos.Learn More Technology Media Spending media dollars is easy but modeling, iterating and attributing is a whole other ballpark. With analytics and measurement buried deep within all our campaigns, our aim is to unleash the true power of media through personalization, contextualization, and optimization. That's a lot of z's.</p>
                            <p className='cursor-pointer font-bold text-white after:content-["-->"] after:ml-1 '>Learn More</p>
                        </div>
                   

                </div>
               
                {ca.map((cat)=>(
                    <div className=" w-full border-1 flex gap-4 justify-center items-center my-6 border-black rounded-sm">

                        <img src={cat.image} alt="design collection" className='w-[440px] h-80'/>
                        <div className="w-[650px] flex flex-col gap-16">
                            <h1 className="relative font-bold text-4xl text-white cursor-pointer">{cat.category}</h1>
                            <p className='text-white'>{cat.description}</p>
                            <p className='cursor-pointer font-bold text-white after:content-["-->"] after:ml-1 '>Learn More</p>
                        </div>
    
                    </div>)
                )}
                <Footer/>
            </div>
        </>
    )


}