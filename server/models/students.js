const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fname: { type: String, require },
  lname: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
  image: { type: String, require },
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
