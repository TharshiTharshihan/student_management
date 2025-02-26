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

// app.post("/signup", async (req, res) => {
//   const { fname, lname, email, password } = req.body;
//   const existingUser = await userModel.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ error: "Email already in use" });
//   }
//   bcrypt
//     .hash(password, 10)
//     .then((hash) => {
//       userModel
//         .create({ fname, lname, email, password: hash })
//         .then((user) => res.json("success"))
//         .catch((err) => res.json(err));
//     })
//     .catch((err) => res.json(err));
// });

// //login

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   userModel
//     .findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         bcrypt.compare(password, user.password, (err, response) => {
//           if (response) {
//             const token = jwt.sign(
//               { email: user.email, role: user.role },
//               "jwt-secret-key",
//               { expiresIn: "1d" }
//             );
//             res.cookie("token", token);
//             return res.json({ status: "success", role: user.role });
//           } else {
//             return res.json("wrong password");
//           }
//         });
//       } else {
//         return res.json("no record");
//       }
//     })
//     .catch((err) => {
//       return res.json("error occurred");
//     });
// });

//signup  Student
app.post("/s-signup", async (req, res) => {
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
app.post("/s-login", (req, res) => {
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

//signup  Teacher
app.post("/t-signup", async (req, res) => {
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
app.post("/t-login", (req, res) => {
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
