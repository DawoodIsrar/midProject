import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function History() {
  return (
    <table className="tab">
        <thead>
          <tr> <th>URL</th>
        <th>shortened URL</th>
        <th>Expiry Date</th>
        </tr>
        </thead>
       <tr>
        <td>heyyy</td>
        <td>urllllllllllll</td>
        <td>asdfghjk</td>
       </tr>
       
     
    </table>
    
  );
  <Outlet/>
}
