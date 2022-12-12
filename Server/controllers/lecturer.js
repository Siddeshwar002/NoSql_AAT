const mongoose = require("mongoose");
const LectureDetails = require('../Models/LectureDetails')

async function login(req, res) {
  console.log("Login endpoint Hit !!");

  console.log(req.body);

  const { email, password } = req.body;

  // login check
  try {
    const arr = await LectureDetails.findOne({
      email,
      password,
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
}

module.exports = {
  login,
};
