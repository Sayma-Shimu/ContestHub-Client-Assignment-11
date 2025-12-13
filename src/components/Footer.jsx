import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/contest_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center ">
            <img
              src={logo}
              alt="StudyMate Logo"
              className="w-12 h-12 object-cover"
            />
            <h2 className="text-3xl font-extrabold text-white tracking-wide">
              ContestHub
            </h2>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-400 max-w-xs">
            A platform designed to help students find the perfect study partner,
            collaborate better, and achieve academic success together.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h3>
          <div className="flex items-center gap-5 text-2xl">
            <a href="https://www.facebook.com/" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact Info
          </h3>
          <p className="text-gray-400">📍 Dhaka, Bangladesh</p>
          <p className="text-gray-400">📧 contact@studymate.com</p>
          <p className="text-gray-400">📞 +880 1234 567890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} StudyMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
