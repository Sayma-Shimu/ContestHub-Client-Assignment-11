import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/contest_logo.png";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo & Name */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="ContestHub Logo"
            className="w-16 h-16 object-contain rounded-xl p-2 shadow-lg bg-white/10"
          />
          <h2 className="text-3xl font-bold text-white tracking-tight hover:underline hover:decoration-indigo-400 transition duration-300">
            ContestHub
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110 hover:rotate-6"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition transform hover:scale-110 hover:-rotate-6"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-indigo-800 mt-6 py-4 text-center text-gray-400 text-sm">
        © 2025 ContestHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
