import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Tdashboard() {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get(
        "https://student-management-p6yb.onrender.com/api/pdfs/get-files"
      );
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const showPdf = (fileName) => {
    window.open(`https://student-management-p6yb.onrender.com/files/${fileName}`, "_blank");
  };

  const handleDelete = async (fileName) => {
    try {
      const response = await axios.delete(
        `https://student-management-p6yb.onrender.com/api/pdfs/delete/${fileName}`
      );

      if (response.data.status === "ok") {
        alert("PDF deleted successfully!");
        getPdf();
      } else {
        alert("Error deleting PDF");
      }
    } catch (error) {
      console.error("Error deleting PDF:", error);
      alert("Failed to delete PDF");
    }
  };

  return (
    <div className="uploaded p-4">
      <Link
        to="/addnotes"
        className="text-lg font-semibold mb-4 ml-3 bg-green-500 px-5 py-2 rounded-md"
      >
        Uploaded PDF
      </Link>
      <br />
      <div className="output-div space-y-4 p-9">
        {allImage === null ? (
          <p>Loading PDFs...</p>
        ) : (
          allImage.map((data) => (
            <div
              className="inner-div border p-4 rounded-lg shadow-md bg-white transition-transform translate-x-4 hover:translate-x-0"
              key={data._id}
            >
              <h5 className="font-semibold text-lg text-gray-800 mb-2">
                📄 {data.name}
              </h5>
              <h6 className="font-serif text-lg text-gray-400 mb-2">
                {data.module} - {data.code}
              </h6>
              <div className="flex gap-3">
                <button
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  onClick={() => showPdf(data.file)}
                >
                  📂 Show PDF
                </button>
                <button
                  className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(data.file)}
                >
                  🗑️ Delete PDF
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tdashboard;
