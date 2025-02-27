import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-400 py-8">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center">
          <Link to="#" className="mb-4">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d6f4e6cf96_Group%2047874-3.png"
              alt="Logo"
              className="max-h-8"
            />
          </Link>
          <div className="text-center font-semibold text-sm">
            {["About", "Features", "Works", "Support", "Help"].map((item) => (
              <Link
                key={item}
                to="#"
                className="px-4 py-1 text-black transition hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-4 mb-4 border-b border-gray-300 w-36"></div>{" "}
          <div className="grid grid-cols-4 gap-6">
            {[
              "6458c625291a945b4ae6cf7b_Vector-1.svg",
              "6458c625291a945560e6cf77_Vector.svg",
              "6458c625291a940535e6cf7a_Vector-3.svg",
              "6458c625291a9433a9e6cf88_Vector-2.svg",
            ].map((icon, index) => (
              <Link key={index} to="#" className="flex items-center">
                <img
                  src={`https://assets.website-files.com/6458c625291a94a195e6cf3a/${icon}`}
                  alt=""
                  className="h-5"
                />
              </Link>
            ))}
          </div>
          <p className="text-xs sm:text-sm mt-4">
            © Copyright 2025. All rights reserved. R.Tharshihan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
