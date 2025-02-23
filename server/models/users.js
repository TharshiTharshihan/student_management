const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: { type: String, require },
  lname: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
  role: { type: String, require, default: "student" },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
