import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function History() {
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
   
  };

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