const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
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

const markModel = mongoose.model("marks", markSchema);

module.exports = markModel;
