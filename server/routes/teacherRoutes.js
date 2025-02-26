const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const teacherModel = require("../models/teachers");
const router = express.Router();

//signup  Teacher
router.post("/signup", async (req, res) => {
  const { fname1, lname1, em, pw, img } = req.body;
  const existingTr = await teacherModel.findOne({ em });

  if (existingTr) {
    return res.status(400).json({ error: "Email already in use" });
  }

  bcrypt
    .hash(pw, 10)
    .then((hash) => {
      teacherModel
        .create({ fname1, lname1, em, pw: hash })
        .then(() => res.json({ status: "success" }))
        .catch((err) =>
          res.status(500).json({ error: "Database error", details: err })
        );
    })
    .catch((err) =>
      res.status(500).json({ error: "Encryption error", details: err })
    );
});

//login Teacher
router.post("/login", (req, res) => {
  const { em, pw } = req.body;

  teacherModel
    .findOne({ em })
    .then((tr) => {
      if (!tr) {
        return res.status(400).json({ error: "No record found" });
      }

      bcrypt.compare(pw, tr.pw, (err, match) => {
        if (match) {
          const token = jwt.sign({ em: tr.email }, "jwt-secret-key", {
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
