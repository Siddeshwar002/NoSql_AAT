const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: { type: String, unique: true},
  DailyAttendanceList: [
    {type: mongoose.Schema.ObjectId, ref: DailyAttendance}
  ]
});

const DailyAttendance = new mongoose.Schema({
    date: {type: Timestamp},
    Students: [{
        usn: {type: mongoose.Schema.ObjectId, required: true, ref: Student},
        present: {type: boolean, required: true},
    }]
})


module.exports = mongoose.model("ClassDetails", ClassSchema);