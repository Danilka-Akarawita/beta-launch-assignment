const employeeSchema = require('../models/employeeSchema')

//create
const createEmployee =async(reqq,res)=>{
    const {fullName,nameWithInital,email,mobile}=req.body
    
    try{
    const employeeDetail=await employeeSchema.create({fullName,nameWithInital,email,mobile})
    res.status(500).json(employeeDetail)
    }
    catch{
    
            console.log(err)
            res.status(400).send("Error")
    }
}

const getAllEmployeeDetails = (req, res) => {
    employeeSchema.find()
      .then((employee) => {
        res.status(200).json(employee)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send("Error retrieving employee details  from database.")
      })
  }

module.exports={
    createEmployee  ,
    getAllEmployeeDetails  
}