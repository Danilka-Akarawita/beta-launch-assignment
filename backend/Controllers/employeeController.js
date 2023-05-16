const employeeSchema = require('../models/employeeSchema')

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

module.exports={
    createEmployee  ,
    getAllEmployeeDetails  
}