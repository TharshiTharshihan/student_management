const express = require("express");
const pdfModel = require("../models/pdf");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Upload PDF
router.post("/upload-files", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ status: "error", message: "No file uploaded" });
  }

  try {
    const newPdf = new pdfModel({
      name: req.body.name,
      code: req.body.code,
      module: req.body.module,
      msg: req.body.msg,
      file: req.file.filename,
    });

    await newPdf.save();
    res.json({ status: "ok", message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

//   get all
router.get("/get-files", async (req, res) => {
  try {
    const pdfs = await pdfModel.find({});
    res.json({ status: "ok", data: pdfs });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/delete/:fileName", async (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, "../files", fileName);

  try {
    // Delete file entry from MongoDB
    await pdfModel.findOneAndDelete({ file: fileName });

    // Check if file exists before deleting
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // Delete file
      console.log("File deleted successfully:", filePath);
    } else {
      console.warn("Warning: File not found on server:", filePath);
    }

    res.json({ status: "ok", message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting PDF:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

module.exports = router;
