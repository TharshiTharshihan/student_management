import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Student from "./components/registration/Student";
import Teacher from "./components/registration/Teacher";
import T_dashboard from "./components/dashboard/T_dashboard";
import S_dashboard from "./components/dashboard/S_dashboard";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Student />} />
        <Route path="/t-login" element={<Teacher />} />
        <Route path="/t-d" element={<T_dashboard />} />
        <Route path="/s-d" element={<S_dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
