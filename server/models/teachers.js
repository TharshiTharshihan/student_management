const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  fname1: { type: String, require },
  lname1: { type: String, require },
  em: { type: String, require, unique: true },
  pw: { type: String, require },
  img: { type: String, require },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
