const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  title: { type: String, require },
  author: { type: String, require },
  year: { type: String, require },
  image: { type: String, require },
});

const teacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = teacherModel;
