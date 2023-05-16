const employeeSchema = require('../models/employeeSchema')
const mongoose = require("mongoose");

//create
const createEmployee =async(req,res)=>{
    const {fullName,nameWithInital,email,mobile}=req.body
    console.log(req.body)
    
    try{
    const employeeDetail=await employeeSchema.create({fullName,nameWithInital,email,mobile})
    res.status(200).json(employeeDetail)
    console.log(res.body)
    }
    catch{
  
            res.status(400).send("Error")
    }
}

const getAllEmployeeDetails = async(req, res) => {
    try{
    const employeeDetail=await employeeSchema.find({})
      
        res.status(200).json(employeeDetail)
      
    }catch {
        
        res.status(500).send("Error retrieving employee details  from database.")
      }
  }

  const deleteElement = async (req, res) => {
    const { id } = req.params;
  
    try {
      const employee = await employeeSchema.findByIdAndDelete(id);
  
      if (!employee) {
        return res.status(400).json({ error: "Employee not found" });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).send("Error deleting employee from database.");
    }
  };

module.exports={
    createEmployee  ,
    getAllEmployeeDetails ,
    deleteElement
}