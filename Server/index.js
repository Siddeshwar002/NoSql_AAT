const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const lecturerRouter = require("./routes/lecturer");
const studentRouter = require("./routes/lecturer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/AttendanceAAT").then(() => {
  console.log("Connected to DB ...");
});

app.use("/lecturer", lecturerRouter);
app.use("/student", studentRouter);

app.listen(3000, function () {
  console.log("[+] SERVER STARTED ON localhost:3000");
});
