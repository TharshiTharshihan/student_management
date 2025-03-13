import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight">
                Learning Management System
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                Faculty of Engineering
              </p>
              {/* Hero Button */}
              <div className="flex items-center">
                <Link
                  to="/s-login"
                  className="mr-5 items-center rounded-md bg-black  hover:bg-white px-6 py-3 font-semibold text-white transition hover:text-black md:mr-6 lg:mr-8"
                >
                  Log In
                </Link>
                <Link
                  to="/t-login"
                  className="flex max-w-full items-center font-bold"
                >
                  <img
                    src="https://www.vidyalayaschoolsoftware.com/assets/images/school_software_1.png"
                    alt="Education"
                    className="mr-2 inline-block max-h-4 w-5"
                  />
                  <p>login as Guest</p>
                </Link>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src="https://www.vidyalayaschoolsoftware.com/assets/images/school_software_1.png"
              alt=""
              className="inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
