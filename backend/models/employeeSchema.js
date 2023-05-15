const mongoose = require('mongoose');
const validator = require('validator');


const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  nameWithInital: {
    type: String,
    required: true
  },
  // preferredName: {
  //   type: String,
  //   required: true
  // },
  // employeeType: {
  //   type: String,
  //   required: true
  // },
  // Experience: {
  //   type: String,
  //   required: true
  // },
  // Gender: {
  //   type: String,
  //   required: true
  // },
  // dateOfBirth: {
  //   type: Date,  
  //   required: true
  // },
  
  email:{
    type: String,
    required: true,
    validate: [validator.isEmail, 'Invalid email address']
  },
  mobile: {
    type: Number,
    required: true
  },
  // destination:{
  //   type:String,
  //   require:true
  // },
  // salary: {
  //   type:Number,
  //   required: true
  // },
  // notes: {
  //   type: String,
  //   required: true
  // },
 
},
{ timestamps: true }
);
module.exports = mongoose.model("Employee", employeeSchema);