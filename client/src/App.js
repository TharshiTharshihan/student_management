import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentS from "./components/registration/Student_S";
import TeacherS from "./components/registration/Teacher_S";
import Tdashboard from "./components/dashboard/T_dashboard";
import Sdashboard from "./components/dashboard/S_dashboard";
import StudentL from "./components/registration/Student_L";
import TeacherL from "./components/registration/Teacher_L";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s-signup" element={<StudentS />} />
        <Route path="/t-signup" element={<TeacherS />} />
        <Route path="/s-login" element={<StudentL />} />
        <Route path="/t-login" element={<TeacherL />} />
        <Route path="/t-d" element={<Tdashboard />} />
        <Route path="/s-d" element={<Sdashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
