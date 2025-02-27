import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Sdashboard() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [s4, setS4] = useState("");
  const [s5, setS5] = useState("");
  const [s6, setS6] = useState("");
  const [s7, setS7] = useState("");
  const [s8, setS8] = useState("");
  const [s9, setS9] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/students/signup", {
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
        image,
      })
      .then((res) => {
        Swal.fire(
          "Congratulations! You Have Successfully updated the marks😊",
          "",
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        alert("Failed");
      });
  };
  return (
    <>
      <div className="w-full relative mt-0 shadow-2xl rounded my-24 overflow-hidden">
        <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="bg w-full h-full object-cover object-center absolute z-0"
          />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              className="h-24 w-24 object-cover rounded-full"
              alt="Profile"
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <h1 className="text-2xl font-semibold">Student</h1>
            <h4 className="text-sm font-semibold">Joined Since '19</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start">
            <Link
              to="#"
              className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold"
            >
              Basic Information
            </Link>
            <Link
              to="#"
              className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
            >
              Another Information
            </Link>
            <Link
              href="#"
              className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
            >
              Another Something
            </Link>
          </div>
          <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div className="px-4 pt-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-8 "
              >
                <div>
                  <h3 className="text-2xl font-semibold p-6">
                    Basic Information
                  </h3>
                  <hr />
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
                  <div className="form-item w-full">
                    <label className="text-xl">Maths</label>
                    <input
                      type="number"
                      name="s1"
                      required
                      onChange={(e) => setS1(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl">Science</label>
                    <input
                      type="number"
                      name="s2"
                      required
                      onChange={(e) => setS2(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl">English</label>
                    <input
                      type="number"
                      name="s3"
                      required
                      onChange={(e) => setS3(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl">Maths</label>
                    <input
                      type="number"
                      name="s4"
                      required
                      onChange={(e) => setS4(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl">Science</label>
                    <input
                      type="number"
                      name="s5"
                      required
                      onChange={(e) => setS5(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl">English</label>
                    <input
                      type="number"
                      name="s6"
                      required
                      onChange={(e) => setS6(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl">Maths</label>
                    <input
                      type="number"
                      name="s7"
                      required
                      onChange={(e) => setS7(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl">Science</label>
                    <input
                      type="number"
                      name="s8"
                      required
                      onChange={(e) => setS8(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl">English</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      name="s9"
                      required
                      onChange={(e) => setS9(e.target.value)}
                      className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                </div>
                <button className="bg-green-600 text-white flex font-semibold w-32 py-2  px-4 justify-center  rounded-md shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sdashboard;
