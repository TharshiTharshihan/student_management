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
import Form from "./components/student/Form";
import AddNotes from "./components/teacher/AddNotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s-signup" element={<StudentS />} />
          <Route path="/t-signup" element={<TeacherS />} />
          <Route path="/s-login" element={<StudentL />} />
          <Route path="/t-login" element={<TeacherL />} />
          <Route path="/t-d" element={<Tdashboard />} />
          <Route path="/s-d" element={<Sdashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/addnotes" element={<AddNotes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
