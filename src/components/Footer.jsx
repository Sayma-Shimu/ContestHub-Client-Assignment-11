import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/contest_logo.png";

const Footer = () => {
  // ডাইনামিক বছর পাওয়ার জন্য
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-400 mt-20 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Website Name */}
        <div className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="ContestHub Logo"
            className="w-14 h-14 object-contain rounded-xl p-2 bg-white/5 border border-white/10 shadow-md group-hover:border-indigo-500 transition-all duration-300"
          />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Contest<span className="text-indigo-500">Hub</span>
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#1877F2] transition-all transform hover:-translate-y-1"
            title="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#0A66C2] transition-all transform hover:-translate-y-1"
            title="Connect on LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider & Copyright Section */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p className="text-gray-500">
            Copyright © {currentYear} <span className="text-gray-300">ContestHub</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <span className="hover:text-indigo-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-indigo-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;