const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./db");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const path = require("path");

app.use(express.json());
app.use("/files", express.static(path.join(__dirname, "files")));

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

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/pdfs", pdfRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
