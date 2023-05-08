import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faExternalLinkSquareAlt, faLink, faExternalLink, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export default function History() {
  const [visible,setVisible] = useState(false)
  const [udate,setUdate] = useState("");
  const [indexx,setIndexx] = useState("")
  const [linkUrl,setLinkUrl]=useState("")
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
  const handleLink = (index)=>{
   var array = [...historyData];
   setLinkUrl(array[index].url)
   
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
                  <button onClick={() => navigator.clipboard.writeText(history.url)}>
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                  <button onClick={() => handleEdit(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button onClick={() => handleLink(index)}>
                  <a href={linkUrl} target="_blank">  
                  <FontAwesomeIcon icon={faExternalLink} />
                  </a>
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