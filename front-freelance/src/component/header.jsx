import {Link, NavLink, Outlet} from 'react-router-dom'
import logo from '../assets/image/Technol.png'
export default function Header(){

   const navigate = [
                    {name:'Accueil', to:'/'},
                    {name:'Services', to:'/services'},
                    {name:'About us', to:'/add'},
                    {name:'test', to:'/ter'},
                ]

    function classNames(...classes){
        return classes.filter(Boolean).join('')
    }

    return (
        <>
            <nav className="w-full flex top-0 z-30 items-center justify-between bg-gray-800 shadow shadow-black fixed text-white p-4">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-20 h-10 mr-2" />
                    <span className="text-xl font-bold">We prod</span>
                </div>
                <ul className="flex items-center space-x-4">
                    
                    {navigate.map((item)=>
                      (<NavLink key={item.name} to={item.to} className={({isActive})=>classNames( isActive ? 'text-white-400 border-b-2 border-white' : 'text-white')}>
                        {item.name}
                      </NavLink>)
                    )}
                    <Link to={'/login'}><button className="bg-transparent h-10 text-center text-white rounded-md border-2 border-bleu-400 hover:bg-gray-600 hover:text-white px-4 py-auto">Login</button></Link>
                </ul>
                
            </nav>

        </>
    )
}