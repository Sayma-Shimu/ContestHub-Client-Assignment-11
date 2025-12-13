import React from "react";
import { Link } from "react-router";
import error from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 px-4 text-center">
      <img 
        src={error} 
        alt="404 Error" 
        className="w-72 md:w-96"
      />

      <h1 className="text-3xl md:text-4xl font-bold mt-5 text-red-500">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      <Link 
        to="/" 
        className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
