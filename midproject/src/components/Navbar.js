import React from 'react'
import Homepage from './Homepage'
import History from './History'
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
   <>
   <ul className='nav'>
    
    
   {/* <li> <Link to="/Homepage">Home</Link></li> */}
    <li> <a href="">Home</a></li>
    <li>History</li>
    
   
   </ul>
   <Outlet/>
   </>
  )
}
