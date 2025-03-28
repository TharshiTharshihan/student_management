import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function StudentS() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  //Signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters long. 🔒",

        showCancelButton: true,
        confirmButtonText: "OK",
      });
      return; // Stop submission if password is too short
    }

    axios
      .post("https://student-management-p6yb.onrender.com/api/students/signup", {
        fname,
        lname,
        email,
        password,
      })
      .then((res) => {
        Swal.fire(
          "Congratulations! You Have Successfully Registered with Us 😊",
          "",
          "success"
        );
        navigate("/s-login");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // If email already exists
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email is already in use. Please try a different one. 😔",
          });
        } else {
          // General error handling
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred. Please try again. 😔",
          });
        }
      });
  };

  return (
    <section>
      {/* Container */}
      <h1 className="text-4xl font-serif text-center p-3">Student Signup</h1>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
          {/* Close Button */}

          {/* Buttons */}
          <div className="max-w-60 mx-auto flex justify-between mb-10">
            <Link
              to="/s-login "
              className="text-xl font-bold md:text-2xl text-gray-500 pb-4 px-2"
            >
              Log In
            </Link>
            <button className="text-xl font-bold md:text-2xl px-2 border-b-2 border-black pb-4">
              Sign Up
            </button>
          </div>

          <div className="mx-auto w-full max-w-md">
            {/* Form */}
            <form
              className="mx-auto mb-4 max-w-md pb-4"
              onSubmit={handleSignup}
            >
              <div className="relative flex flex-col">
                <label className="font-bold mb-1 text-left">FirstName</label>
                <input
                  type="text"
                  className="mb-6 block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                  placeholder="FirstName"
                  value={fname}
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="relative flex flex-col">
                <label className="font-bold mb-1 text-left">LastName</label>
                <input
                  type="text"
                  className="mb-6 block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                  placeholder="LastName"
                  value={lname}
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="relative flex flex-col">
                <label className="font-bold mb-1 text-left">Email</label>
                <input
                  type="email"
                  className="mb-6 block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="relative flex flex-col">
                <label className="font-bold mb-1 text-left">Password</label>
                <input
                  type="password"
                  className="block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                  placeholder="Password (min 8 characters)"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
              </div>

              <label className="flex items-center justify-start mb-6">
                <input type="checkbox" name="checkbox" className="mr-2" />
                <span className="inline-block text-sm">
                  I agree to receive marketing emails from Flowspark
                </span>
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-black px-6 py-3 text-white font-semibold cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentS;
