import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import Footer from '../component/footer';

export default function Reserve(){
    const temps = ['9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45'];


    const handledate = (info)=>{
        const day = info.startStr;
        console.log(day)
    }

   const calenderOptions ={
        hiddenDays:[0,6]
   }

   const reservation = (e)=>{
        e.preventDefault();

   }
    return(
        <div>
        <div className="w-full ">
            <h3 className='text-4xl font-semibold text-center text-white bg-gray-900 pt-4 h-20'>Reserve your consulting</h3>
        </div>
        <div className="w-96 mx-auto mt-10 h-50 flex flex-col text-white justify-center">
            <FullCalendar
                plugins={[ dayGridPlugin,  interactionPlugin]}
                initialView="dayGridMonth"
                selectable = {true}
                select={handledate}
                {...calenderOptions}
                
            />
            <label htmlFor="time" className="block mt-3 font-semibold mb-1">Select time </label>
            <select id="time" className='block h-8 mb-3 border-2' name="">
                <option selected>Select time of consulting</option>
                {temps.map((temp)=>(
                    <option value={temp}>{temp}</option>
                ))}
            </select>
            <button type='submit' onClick={reservation} className='bg-gray-600 hover:bg-gray-400 text-white text-lg font-semibold w-32 rounded-md border-2 border-gray-300 mx-auto'>Reserve</button>
        </div>    
        </div>
    )
}