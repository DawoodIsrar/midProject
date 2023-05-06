import React, { useState } from "react";
import History from "./History";
import Navbar from "./Navbar";
export default function Homepage() {
    
    const btn = (e) => {
    e.preventDefault();
    var arr = [];
    const key = "s-url";
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    
    var data = {
      url: name,
      shortUrl:`s-url/${Math.floor(Math.random()*999)}`,
      date: date,
    };

    arr.push(data);
    const updatedData = [...existingData, data];
    localStorage.setItem(key, JSON.stringify(updatedData));
    console.log(localStorage.getItem(key));
    setDate('')
    setName('')
    document.getElementById("s-url").innerHTML=`${data.shortUrl}`;
    setCp(data.shortUrl) ;
    document.getElementById("div-url").style.display="inline-block"
  };
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const[cp,setCp]=useState("")
  const copy=()=>{
    
    navigator.clipboard.writeText(cp);
  

  }


  return (
    <div className="home">
      <h1 class="heading">URL Shortern</h1>
      <form class="form">
        <input
          class="input1"
          type="Url"
          id="txt"
          placeholder="Enter URL"
          value={name}
          onChange={(e) => setName(e.target.value)}>
        </input>
        <br></br>
        <br></br>
        <input
          class="dte"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}>
        </input>
       
        <button type="submit" class="btn" onClick={btn}>
          Get Short URL{" "}
        </button>
      
      <div id='div-url' style={{display:"none"}}>
      <span id="s-url"> </span>
      <span><i class="fa-regular fa-copy fa-shake" onClick={copy} > </i></span>
      </div>
      </form>
    </div>
  );
}
