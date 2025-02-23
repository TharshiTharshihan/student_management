const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const studentModel = require("./models/students");
const teacherModel = require("./models/teachers");
const userModel = require("./models/users");
const db = require("./db");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Student Management API");
});

//signup

app.post("/signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" });
  }
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      userModel
        .create({ fname, lname, email, password: hash })
        .then((user) => res.json("success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

//login

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign(
              { email: user.email, role: user.role },
              "jwt-secret-key",
              { expiresIn: "1d" }
            );
            res.cookie("token", token);
            return res.json({ status: "success", role: user.role });
          } else {
            return res.json("wrong password");
          }
        });
      } else {
        return res.json("no record");
      }
    })
    .catch((err) => {
      return res.json("error occurred");
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
