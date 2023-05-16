import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../controller/controllers";

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

  return (
    <div>
       {users.map((detail) => (
        <p key={detail._id}>{detail.fullName} <span>  {detail.email}</span> <span>{detail.mobile}</span></p>
      ))}
    </div>
  );
}
