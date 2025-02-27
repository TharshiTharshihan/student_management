const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fname: { type: String, require },
  lname: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
  s1: { type: String, require },
  s2: { type: String, require },
  s3: { type: String, require },
  s4: { type: String, require },
  s5: { type: String, require },
  s6: { type: String, require },
  s7: { type: String, require },
  s8: { type: String, require },
  s9: { type: String, require },
  image: { type: String, require },
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
