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

module.exports={
    createEmployee    
}