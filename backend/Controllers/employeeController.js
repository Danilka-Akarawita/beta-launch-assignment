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
  const updateEmployeeByName = async (req, res) => {
    const { name } = req.params;
  
  
    console.log({ ...req.body });
   
    const account = await employeeSchema.findOneAndUpdate(
      {  fullname: name },
      { ...req.body },
      {
        returnOriginal: false,
      }
    );
  
    if (!account) return res.status(400).json({ error: "No account found" });
    res.status(200).json(account);
  };

module.exports={
    createEmployee  ,
    getAllEmployeeDetails ,
    deleteElement,
    updateEmployeeByName
}