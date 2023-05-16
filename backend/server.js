require("dotenv").config();
const express = require("express");
const cors=require("cors")
const EmployeeDetailRoute = require("./routes/employeeRoutes");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());


mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected");
    app.listen(process.env.PORT, () => {
      console.log("app", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/api/employee',EmployeeDetailRoute);