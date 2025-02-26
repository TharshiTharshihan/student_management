import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Student_S from "./components/registration/Student_S";
import Teacher_S from "./components/registration/Teacher_S";
import T_dashboard from "./components/dashboard/T_dashboard";
import S_dashboard from "./components/dashboard/S_dashboard";
import Student_L from "./components/registration/Student_L";
import Teacher_L from "./components/registration/Teacher_L";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s-signup" element={<Student_S />} />
        <Route path="/t-signup" element={<Teacher_S />} />
        <Route path="/s-login" element={<Student_L />} />
        <Route path="/t-login" element={<Teacher_L />} />
        <Route path="/t-d" element={<T_dashboard />} />
        <Route path="/s-d" element={<S_dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
