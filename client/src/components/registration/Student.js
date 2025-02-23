import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Student() {
  const [isSignIn, setIsSignIn] = useState(true);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  //Signup
  //   const handleSignup = (e) => {
  //     e.preventDefault();
  //     if (password.length < 8) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Password must be at least 8 characters long. 🔒",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonText: "OK",
  //       });
  //       return; // Stop submission if password is too short
  //     }
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:5000/signup", { fname, lname, email, password })
  //       .then((res) => {
  //         Swal.fire(
  //           "Congratulations! You Have Successfully Registered with Us 😊",
  //           "",
  //           "success"
  //         );
  //         setIsSignIn(true);
  //       })
  //       .catch((err) => {
  //         if (err.response && err.response.status === 400) {
  //           // If email already exists
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "Email is already in use. Please try a different one. 😔",
  //           });
  //         } else {
  //           // General error handling
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "An error occurred. Please try again. 😔",
  //           });
  //         }
  //       });
  //   };

  //   // Login
  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:5000/login", { email, password })
  //       .then((res) => {
  //         if (res.data.status === "success") {
  //           if (res.data.role === "teacher") {
  //             navigate("/s-d");
  //             Swal.fire(
  //               " You Have Successfully loggedin as Teacher 😊",
  //               "",
  //               "success"
  //             );
  //           } else {
  //             navigate("/");
  //             Swal.fire(
  //               "You Have Successfully loggedin as Student 😊",
  //               "",
  //               "success"
  //             );
  //           }
  //         } else {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "invalid Login Credintials",
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Login error:", err);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Login failed. Please check your Email or password and try again.",
  //         });
  //       });
  //   };
  return (
    <div>
      {isSignIn ? (
        <section>
          {/* Container */}
          <h1 className="text-xl font-bold">Student</h1>
          <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20 ">
            {/* Component */}
            <div className="relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
              {/* Buttons */}
              <div className="max-w-60 mx-auto flex justify-between mb-10">
                <button
                  className="text-xl font-bold md:text-2xl text-gray-500 pb-4 px-2"
                  onClick={() => setIsSignIn(false)}
                >
                  Sign Up
                </button>
                <button className="text-xl font-bold md:text-2xl px-2 border-b-2 border-black pb-4">
                  Log In
                </button>
              </div>

              <div className="mx-auto w-full max-w-md">
                {/* Form */}
                <form
                  className="mx-auto mb-4 max-w-md pb-4"
                  // onSubmit={handleLogin}
                >
                  <div className="relative flex flex-col">
                    <label className="font-bold mb-1 text-left">Email</label>
                    <input
                      type="email"
                      className="mb-6 block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                      name="email"
                      placeholder="EMAIL"
                      required
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="relative flex flex-col">
                    <label className="font-bold mb-1 text-left">Password</label>
                    <input
                      type="password"
                      className="block h-9 w-full rounded-md border border-black px-3 py-6 text-sm text-black"
                      name="pswd"
                      placeholder="PASSWORD"
                      required
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
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
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          {/* Container */}
          <h1 className="text-xl font-bold">Student</h1>
          <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
            {/* Component */}
            <div className="relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
              {/* Close Button */}

              {/* Buttons */}
              <div className="max-w-60 mx-auto flex justify-between mb-10">
                <button
                  className="text-xl font-bold md:text-2xl text-gray-500 pb-4 px-2"
                  onClick={() => setIsSignIn(true)}
                >
                  Log In
                </button>
                <button className="text-xl font-bold md:text-2xl px-2 border-b-2 border-black pb-4">
                  Sign Up
                </button>
              </div>

              <div className="mx-auto w-full max-w-md">
                {/* Form */}
                <form
                  className="mx-auto mb-4 max-w-md pb-4"
                  // onSubmit={handleSignup}
                >
                  <div className="relative flex flex-col">
                    <label className="font-bold mb-1 text-left">
                      FirstName
                    </label>
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
      )}
    </div>
  );
}

export default Student;
