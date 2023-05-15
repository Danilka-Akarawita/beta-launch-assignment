 import React from 'react'
 import { useState } from "react";
 export default function AddingPage() {


    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        nameWithInital: "",
        
      });
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
   return (
    <div>
       <div>
      
      <input
        type="text"
        placeholder="fullName"
        //className={inputStyle}
        name="fullName"
        value={formData.fullName}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="Name With Inital"
        //className={inputStyle}
        name="nameWithInital"
        value={formData.nameWithInital}
        onChange={handleFormChange}
      />
      <input 
        type="text"
        placeholder="email"
       // className={inputStyle}
        name="email"
        value={formData.email}
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="mobile"
        //className={inputStyle}
        name="mobile"
        value={formData.mobile}
        onChange={handleFormChange}
      />
      </div>
      <button>Add</button>
      </div>
      
 
   )
 }
 