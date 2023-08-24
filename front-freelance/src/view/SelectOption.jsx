import iconReservetion from '../assets/image/clock.png'
import iconSpicfiaction from '../assets/image/checkmark.png'
import { Link } from 'react-router-dom'
export default function SelectOption()
{
    return(
        <>

            <div className="my-auto bg-slate-900 h-screen">
                <h3 className='text-white text-center pt-10 text-6xl'>IT Services</h3>
                <div className="flex justify-center gap-10 pt-12">
                    <div className="flex flex-col border-2 w-72 h-80 text-center hover:cursor-pointer">
                        <img src={iconSpicfiaction} alt="" className='h-72'/>
                        <h4 className='text-white text-2xl pb-3  hover:text-purple-400'>Specifications</h4>
                    </div>
                    <Link to={'/reserve'}>
                        <div className="flex flex-col border-2 w-72 h-80 text-center hover:cursor-pointer">
                            <img src={iconReservetion} alt="" className='h-72'/>
                            <h4 className='text-white text-2xl pb-3  hover:text-purple-400'>Reserve for Consulting</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}