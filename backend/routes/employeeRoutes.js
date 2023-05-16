const express = require("express");
const {createEmployee,getAllEmployeeDetails } = require("../Controllers/employeeController");
const router = express.Router();

router.post('/insertEmployee',createEmployee);
router.get('/getAllDetails',getAllEmployeeDetails);

module.exports = router;