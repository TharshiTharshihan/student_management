import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function Teacher() {
  const [isSignIn, setIsSignIn] = useState(true);

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
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
      });
      return; // Stop submission if password is too short
    }
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", { fname, lname, email, password })
      .then((res) => {
        Swal.fire(
          "Congratulations! You Have Successfully Registered with Us 😊",
          "",
          "success"
        );
        setIsSignIn(true);
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

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        if (res.data.status === "success") {
          if (res.data.role === "teacher") {
            navigate("/t-d");
            Swal.fire(
              " You Have Successfully loggedin as Teacher 😊",
              "",
              "success"
            );
          } else {
            navigate("/");
            Swal.fire(
              "You Have Successfully loggedin as Student 😊",
              "",
              "success"
            );
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "invalid Login Credintials",
          });
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed. Please check your Email or password and try again.",
        });
      });
  };
  return (
    <div>
      {isSignIn ? (
        <section>
          {/* Container */}
          <h1 className="text-xl font-bold">Teacher</h1>
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
                  onSubmit={handleLogin}
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
          <h1 className="text-xl font-bold">Teacher</h1>
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
                  onSubmit={handleSignup}
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

                  <div className="mb-6 mt-6 flex w-full justify-around items-center">
                    <div className="w-full h-[2px] bg-gray-300"></div>
                    <p className="text-sm px-5">OR</p>
                    <div className="w-full h-[2px] bg-gray-300"></div>
                  </div>

                  <Link
                    to="/"
                    className="relative mb-4 flex font-bold bg-white text-center w-full cursor-pointer items-center rounded-md px-6 py-3 border border-solid border-black"
                  >
                    <svg
                      className="absolute"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM12 19.5C10.7666 19.5 9.55227 19.1958 8.46452 18.6144C7.37677 18.033 6.44919 17.1923 5.76396 16.1668C5.07872 15.1413 4.65698 13.9626 4.53609 12.7351C4.41519 11.5077 4.59888 10.2694 5.07087 9.12988C5.54287 7.99038 6.2886 6.98487 7.24202 6.20242C8.19544 5.41997 9.32712 4.88473 10.5368 4.64411C11.7465 4.40349 12.9968 4.46492 14.1771 4.82295C15.3574 5.18099 16.4312 5.82458 17.3033 6.69672C17.373 6.76634 17.4283 6.84902 17.4661 6.94004C17.5038 7.03105 17.5233 7.1286 17.5233 7.22713C17.5233 7.32566 17.5039 7.42323 17.4662 7.51427C17.4286 7.6053 17.3733 7.68802 17.3036 7.75769C17.234 7.82736 17.1512 7.88262 17.0602 7.92031C16.9692 7.958 16.8716 7.97738 16.7731 7.97735C16.6745 7.97732 16.577 7.95788 16.486 7.92013C16.395 7.88238 16.3123 7.82707 16.2426 7.75735C15.2839 6.79876 14.0286 6.19318 12.6816 6.0393C11.3346 5.88542 9.97512 6.19232 8.82483 6.90998C7.67454 7.62764 6.80124 8.71375 6.34726 9.99128C5.89328 11.2688 5.88538 12.6625 6.32486 13.9451C6.76433 15.2276 7.62527 16.3236 8.76735 17.0542C9.90943 17.7849 11.2653 18.1072 12.614 17.9686C13.9627 17.83 15.2247 17.2386 16.1943 16.291C17.1639 15.3433 17.7839 14.0952 17.9534 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25H18.75C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.4978 13.9884 18.7069 15.8948 17.3008 17.3008C15.8948 18.7069 13.9884 19.4978 12 19.5Z"
                        fill="black"
                      />
                    </svg>
                    <span className="mx-auto pl-5 lg:pl-0">Home</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Teacher;
