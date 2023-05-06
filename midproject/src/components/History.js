import React from "react";

export default function History() {
  const key = "s-url";
  var array = localStorage.getItem(key);
  var data = array ? [JSON.parse(array)] : []; // check if array is null
  var newdata = data[0]
  return (
    <>
      <h1 id="historyh1">History</h1>
      {
        newdata?.length > 0 ?
         <table id="table" className="tab">
        <thead>
             <tr>
               <th>URL</th>
               <th>shortened URL</th>
               <th>Expiry Date</th>
             </tr>
           </thead>
        {  newdata?.map((history) => (
           
           <tbody>
              <tr  key={history}>
                <td>{history.url}</td>
                <td>{history.shortUrl}</td> {/* Use correct key name */}
                <td>{history.date}</td>
              </tr>
            </tbody>
           
        
         
        ) ) }
  
  </table>
  : <h3 id='no' >No Data</h3>
      }
     
    </>
  );
}
