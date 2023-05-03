import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import History from './components/History';




function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar/>}> 
          <Route index element={<Homepage/>}/>
          <Route path="History" element={<History/>}/>
          </Route> 
     </Routes>
   </BrowserRouter>
  );
}

export default App;
