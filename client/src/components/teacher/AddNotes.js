import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AddNotes() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);
  const [module, setModule] = useState(null);
  const [msg, setMsg] = useState("");
  const [allImage, setAllImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("https://student-management-p6yb.onrender.com/api/pdfs/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("code", code);
    formData.append("module", module);
    formData.append("msg", msg);
    console.log(name, file);

    const result = await axios.post(
      "https://student-management-p6yb.onrender.com/api/pdfs/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      toast.success("uploaded successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      getPdf();
      navigate("/t-d");
    }
  };
  // const showPdf = (pdf) => {
  //   // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  //   setPdfFile(`http://localhost:5000/files/${pdf}`);
  // };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Don’t rely only on textbooks—watch videos, read blogs, or use
              interactive platforms.Discussing topics with others can give new
              perspectives and help with understanding.
            </p>

            <div className="mt-8">
              <a href="/" className="text-2xl font-bold text-pink-600">
                {" "}
                tharshihan2000@gmail.com{" "}
              </a>

              <address className="mt-2 not-italic">Contact me</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative flex flex-col">
                <label className="font-serif mb-1 text-left">Name</label>
                <input
                  className="w-full rounded-md border border-blue-700 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="font-serif mb-1 text-left">Module</label>
                  <input
                    className="w-full rounded-md border border-blue-700 p-3 text-sm"
                    placeholder="Module"
                    type="text"
                    name="module"
                    required
                    onChange={(e) => setModule(e.target.value)}
                  />
                </div>

                <div>
                  <label className="font-serif mb-1 text-left">Code</label>
                  <input
                    className="w-full rounded-md border border-blue-700 p-3 text-sm"
                    placeholder="Code"
                    type="text"
                    name="code"
                    required
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-serif mb-1 text-left">Notes</label>
                  <input
                    className="w-full rounded-md border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="file"
                    accept="application/pdf"
                    name="file"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 1 </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 2 </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 3 </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="font-serif mb-1 text-left">Message</label>

                <textarea
                  className="w-full rounded-md border border-blue-700 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  name="msg"
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNotes;
