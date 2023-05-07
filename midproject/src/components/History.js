import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function History() {
  const [visible,setVisible] = useState(false)
  const [udate,setUdate] = useState("");
  const [indexx,setIndexx] = useState("")
  const key = "s-url";
  const [historyData, setHistoryData] = useState(() => {
    const array = localStorage.getItem(key);
    const data = array ? [JSON.parse(array)] : [];
    return data[0] || [];
  });

  const handleDelete = (index) => {
    const newData = [...historyData];
    newData.splice(index, 1);
    setHistoryData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const handleEdit = (index) => {
    setVisible(true);
    setIndexx(index)
   
  };
  const updaetDate = ()=>{
    setVisible(false)
    var uparray = [...historyData]
    uparray[indexx].date = udate
    console.log(uparray)
    localStorage.setItem(key, JSON.stringify(uparray));
  }

  return (
    <>
      <h1 id="historyh1">History</h1>
      {historyData.length > 0 ? (
        <table id="table" className="tab">
          <thead>
            <tr>
              <th>URL</th>
              <th>Shortened URL</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((history, index) => (
              <tr key={index}>
                <td>{history.url}</td>
                <td>{history.shortUrl}</td>
                <td>{history.date}</td>
                <td>
                  
                 {indexx == index &&  <form >
                  {visible && <>
                    <input type="date" onChange={(e)=>{setUdate(e.target.value)}}></input>
                  <button onClick={updaetDate}>update</button>
                  </>
                  
                  }
                    
                  </form>}
                  <button onClick={() => handleEdit(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No history found.</p>
      )}
    </>
  );
}