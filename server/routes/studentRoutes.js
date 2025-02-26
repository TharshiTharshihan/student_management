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

module.exports = router;
