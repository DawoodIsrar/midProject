import React,{ useState } from "react";
import History from "./History";
import Navbar from "./Navbar";


export default function Homepage() {

  
  return (
    <div className="home">
      <h1 class="heading">URL Shortern</h1>
        <form class="form">
         <input class="input1" type="Url" id="txt" placeholder="Enter URL" ></input><br></br><br></br>
         <input class="dte" type="date"></input>
         <button class="btn" >Get Short URL </button>
         </form>
      
      
    </div>
  );

  }

