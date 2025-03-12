import React, { useState, useEffect } from "react";
import axios from "axios";

function Tdashboard() {
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null); // Stores the selected PDF file

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/api/pdfs/get-files"
      );
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const showPdf = (fileName) => {
    window.open(`http://localhost:5000/files/${fileName}`, "_blank");
  };

  const handleDelete = async (fileName) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/pdfs/delete/${fileName}`
      );

      if (response.data.status === "ok") {
        alert("PDF deleted successfully!");
        getPdf(); // Refresh the list after deletion
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
      <h4 className="text-lg font-semibold mb-4">Uploaded PDFs:</h4>

      <div className="output-div space-y-4">
        {allImage === null ? (
          <p>Loading PDFs...</p>
        ) : (
          allImage.map((data) => (
            <div className="inner-div border p-2 rounded" key={data._id}>
              <h6 className="font-medium">Title: {data.name}</h6>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => showPdf(data.file)}
              >
                Show PDF
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => handleDelete(data.file)}
              >
                Delete PDF
              </button>
            </div>
          ))
        )}
      </div>

      {/* ✅ Show PDF Preview when a file is selected */}
      {pdfFile && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold">PDF Preview:</h4>
          <iframe
            src={pdfFile}
            width="100%"
            height="500px"
            className="border rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Tdashboard;
