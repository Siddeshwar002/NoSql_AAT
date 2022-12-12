const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    name : String,
    email : String,
    phone : Number,
    password : String,
    courses : Array 
});


module.exports = mongoose.model("LectureDetails", LectureSchema);