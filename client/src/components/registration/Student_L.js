import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

function Student_L() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/s-login", { email, password })
      .then((res) => {
        if (res.data.status === "success") {
          navigate("/s-d");
          Swal.fire(
            " You Have Successfully loggedin as Student 😊",
            "",
            "success"
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "invalid Login Credintials",
          });
        }
      });
  };
  return (
    <section>
      {/* Container */}
      <h1 className="text-xl font-bold">Student Login</h1>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20 ">
        {/* Component */}
        <div className="relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
          {/* Buttons */}
          <div className="max-w-60 mx-auto flex justify-between mb-10">
            <Link
              to="/s-signup "
              className="text-xl font-bold md:text-2xl text-gray-500 pb-4 px-2"
            >
              Sign Up
            </Link>
            <button className="text-xl font-bold md:text-2xl px-2 border-b-2 border-black pb-4">
              Log In
            </button>
          </div>

          <div className="mx-auto w-full max-w-md">
            {/* Form */}
            <form className="mx-auto mb-4 max-w-md pb-4" onSubmit={handleLogin}>
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
  );
}

export default Student_L;
