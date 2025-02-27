const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const studentModel = require("../models/students");

const router = express.Router();

//signup  Student
router.post("/signup", async (req, res) => {
  const { fname, lname, email, password, image } = req.body;
  const existingSt = await studentModel.findOne({ email: email });

  if (existingSt) {
    return res.status(400).json({ error: "Email already in use" });
  }

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      studentModel
        .create({ fname, lname, email: email, password: hash })
        .then(() => res.json({ status: "success" }))
        .catch((err) =>
          res.status(500).json({ error: "Database error", details: err })
        );
    })
    .catch((err) =>
      res.status(500).json({ error: "Encryption error", details: err })
    );
});

//login Stu
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  studentModel
    .findOne({ email: email })
    .then((st) => {
      if (!st) {
        return res.status(400).json({ error: "No record found" });
      }

      bcrypt.compare(password, st.password, (err, match) => {
        if (match) {
          const token = jwt.sign({ email: st.email }, "jwt-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ status: "success" });
        } else {
          return res.status(401).json({ error: "Wrong password" });
        }
      });
    })
    .catch(() => res.status(500).json({ error: "Server error" }));
});

//

router.post("/signup", async (req, res) => {
  const updates = req.body;

  if (
    !updates.s1 ||
    !updates.s2 ||
    !updates.s3 ||
    !updates.s4 ||
    !updates.s5 ||
    !updates.s6 ||
    !updates.s7 ||
    !updates.s8 ||
    !updates.s9
  ) {
    return res.status(400).json({ message: "Fill all fields" });
  }
  const newupdates = new studentModel(updates);

  try {
    await newupdates.save();
    res.status(201).json({ status: "success", data: newupdates });
  } catch (err) {
    console.error("Error in marks adding", err.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});

module.exports = router;
