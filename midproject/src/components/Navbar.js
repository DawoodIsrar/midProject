import React, { useState } from 'react'
import Homepage from './Homepage'
import History from './History'
import {Outlet ,Link} from 'react-router-dom'
export default function Navbar() {

  return (
   <>
   <div class="navbar">
       <i class=""></i> <Link to="/"> Home </Link>
       <i class=""></i><Link to="/History">History</Link>
       <i class=""></i><Link to="/History">Contact Us</Link>
</div>
   <Outlet/>
   </>
  )
}
