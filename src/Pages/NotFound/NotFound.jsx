import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-white">
      {/* Not Found Page Added */}
      <div className="max-w-[1440px] mx-auto text-center py-10 px-6 sm:px-10">
        <div className="mb-8">
          <img
            src="https://i.ibb.co.com/QvQrhm2Q/404.png"
            alt="Illustration of a missing page"
            className="rounded-lg  w-full h-auto mx-auto max-w-sm sm:max-w-md"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          It seems the page you were looking for has moved, been deleted, or
          never existed.
        </p>

        <button
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                  text-base font-medium rounded-xl shadow-lg text-white bg-indigo-600 
                  hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          <NavLink to="/">Go to Homepage</NavLink>
        </button>

        <p className="mt-6 text-sm text-gray-400">
          Need help? Try contacting support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
