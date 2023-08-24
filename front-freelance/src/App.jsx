import { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Header from './component/header'
import { useStateContext } from './Context/contextHome'

function App() {
  const {user} = useStateContext();

  return (
    <body className='bg-gray-800 h-full'>

<h1 className='text-black'>the dasdw</h1>
      <Header/>
     
      <Outlet/>
      
    </body>
  )
}
export default App
