const express = require("express");
const {createEmployee,getAllEmployeeDetails,deleteElement,updateEmployeeByName,getAllEmployeeDetailsbyAsc } = require("../Controllers/employeeController");
const router = express.Router();

router.post('/insertEmployee',createEmployee);
router.get('/',getAllEmployeeDetails);
router.get('/asc',getAllEmployeeDetailsbyAsc);
router.delete('/:id',deleteElement)
router.put("/:name", updateEmployeeByName);

module.exports = router;