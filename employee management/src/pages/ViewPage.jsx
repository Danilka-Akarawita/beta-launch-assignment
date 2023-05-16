import React from "react";
import { useState, useEffect } from "react";
import { getUsers,deleteEmployee } from "../controller/controllers";

export default function ViewPage() {
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  if (users.length === 0) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  const handleDelete =async()=>{
    const user=deleteEmployee()
   
    
  }
  const cardStyle = {
    border: '1px solid gray',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '550px',
  };
  
  const containerStyle = {
    
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={containerStyle} >
       {users.map((detail) => (
        <div style={cardStyle}>

        <p key={detail._id}>{detail.fullName} <span>  {detail.email}</span> <span>{detail.mobile}</span> <span><button >Edit</button></span><span><button onClick={handleDelete}>Delete</button></span></p>
      </div>
      ))}
    </div>
  );
}
