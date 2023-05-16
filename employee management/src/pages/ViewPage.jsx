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
  

  const handleDelete = async () => {
    try {
      const user = await deleteEmployee(users._id);
      console.log(users._id)
      console.log('Employee deleted successfully:', user);
    } catch (error) {
        
      console.error('Error deleting employee:', error);
    }
  };
  
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
       {users.map((detail,index) => (
        <div style={cardStyle} key={index}>

        <p key={detail._id}>{detail.fullName} <span>  {detail.email}</span> <span>{detail.mobile}</span> <span><button onClick={handleDelete}>Delete</button></span></p>
      </div>
      ))}
    </div>
  );
}
