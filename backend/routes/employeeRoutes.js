const express = require("express");
const {createEmployee,getAllEmployeeDetails,deleteElement } = require("../Controllers/employeeController");
const router = express.Router();

router.post('/insertEmployee',createEmployee);
router.get('/',getAllEmployeeDetails);
router.delete('/:id',deleteElement)

module.exports = router;