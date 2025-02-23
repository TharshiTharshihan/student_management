const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  title: { type: String, require },
  author: { type: String, require },
  year: { type: String, require },
  image: { type: String, require },
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
