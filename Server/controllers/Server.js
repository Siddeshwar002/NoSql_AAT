const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

const mongoAtlasUri = process.env.DB_URL;
var MongoClient = require("mongodb").MongoClient;

let DB;
try {
  mongoose.connect(
    "mongodb://localhost:27017/AttendanceAAT",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
      if (err) console.log(err);
      else {
        console.log("[+] Database Created Successfully !!");
      }
    }
  );
} catch (e) {
  console.log("could not connect");
  console.log(e);
}

app.get("/", (req, res) => {
  res.send("GET");
});

app.post("/", (req, res) => {
  res.send("POST");
});

// modal imported
const LectureDetails = require("../Models/LectureDetails");
const StudentDetails = require("../Models/StudentDetails");

// Lecture Registraiton
app.post("/LectureRegister", (req, res) => {
  const { U_name, U_email, U_password, U_phone } = req.body;

  const Lecture = new LectureDetails({
    _id: new mongoose.Types.ObjectId(),
    name: U_name,
    email: U_email,
    phone: U_phone,
    password: U_password,
    courses: ["A", "B", "C"],
  });

  Lecture.save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(201).json({
    message: "Handling POST for Registrtions",
    LectureDetails_ID: Lecture,
  });
});

// Lecture Login
app.post("/LectureLogin", async (req, res) => {
  // console.log(req.body);

  const { U_email, U_password } = req.body;

  // login check
  try {
    const arr = await LectureDetails.findOne({
      email: U_email,
      password: U_password,
    });

    if (!arr) res.status(404).send(`Login Failed !!`);
    else {
      console.log(arr);
      res.status(201).send(`Login Succesfull !!`);
    }

    // Now i got all course Array
    // This will be sent to FrontEnd
    const { courses } = arr;
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
});

app.post("/LectureAddingClasses", async (req, res) => {
  const { Students, ClassName } = req.body;
  console.log(req.body);

});

app.listen(3000, function () {
  console.log("[+] SERVER STARTED ON localhost:3000");
});
