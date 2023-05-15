const express = require("express");
const {createEmployee } = require("../Controllers/employeeController");
const router = express.Router();

router.post('/insertEmployee',createEmployee);

module.exports = router;