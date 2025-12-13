import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-500 flex items-center justify-center px-4">
     
      <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-16 max-w-2xl w-full text-center">
        
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
          404
        </h1>

        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
          Oops! Page Not Found
        </h2>

       
        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. If you think something is broken, contact our support.
        </p>

        
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;