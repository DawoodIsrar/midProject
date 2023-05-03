import React,{ useState } from "react";
import History from "./History";
import Navbar from "./Navbar";


export default function Homepage() {

  
  return (
    <>
    
    <form>
      <input type="text" id="txt" placeholder="Enter URL" ></input>
      <input type="date"></input>
      
      </form>
      <button >Get Short URL </button>
     
      <span id="shrtUrl"></span>
    </>
  );

  }

