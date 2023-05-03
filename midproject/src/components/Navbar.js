import React, { useState } from 'react'
import Homepage from './Homepage'
import History from './History'
import {Outlet ,Link} from 'react-router-dom'

export default function Navbar() {
  
  
  return (
   <>
   <nav id="navbar">
   <ul className='nav'>
      <li> 
        <Link to="/"> Home </Link>
      </li>
    <li>
       <Link to="/History">History</Link></li>
    </ul>
   </nav>
   <Outlet/>
   </>
  )
}
