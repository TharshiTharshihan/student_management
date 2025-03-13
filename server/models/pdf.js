const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  name: { type: String, require },
  file: { type: String, require },
  module: { type: String, require },
  code: { type: String, require },
  msg: { type: String, require },
});

const pdfModel = mongoose.model("pdfs", pdfSchema);

module.exports = pdfModel;
