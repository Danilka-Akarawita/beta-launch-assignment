 import React from 'react'
 import { useState } from "react";
 import  {createEmployee} from "../controller/controllers";
 export default function AddingPage() {
  const [error, setError] = useState(null);

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
      const handleAdd = async () => {
        try {
          const user = await createEmployee(formData.fullName, formData.nameWithInital,formData.email,formData.mobile);
          
          if (user) {
            console.log(user);
          } else {
            setError("Invalid Credentials");
          }
        } catch (e) {
          setError(e.message);
        }
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
      <button onClick={handleAdd}>Add</button>
      </div>
      
 
   )
 }
 