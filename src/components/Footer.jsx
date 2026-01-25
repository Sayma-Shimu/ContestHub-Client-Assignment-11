import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/contest_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c10] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Branding Section */}
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-white tracking-tight">
                Contest<span className="text-indigo-500">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The ultimate platform for global creators to showcase talent and win extraordinary rewards.
            </p>
            {/* Social Icons with Links */}
            <div className="flex gap-5 text-xl mt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaXTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors"><FaFacebook /></a>
              <a href="https://linkedin.com/in" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <Link to="/all-contests" className="hover:text-indigo-400 transition-colors w-fit">Browse Contests</Link>
              <a href="#categories" className="hover:text-indigo-400 transition-colors w-fit">Categories</a>
              <Link to="/about-us" className="hover:text-indigo-400 transition-colors w-fit">About ContestHub</Link>
              <Link to="/contact" className="hover:text-indigo-400 transition-colors w-fit">Support Center</Link>
            </nav>
          </div>

          {/* 3. Contact & Address Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Office Address</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-indigo-500 mt-1" />
                <p>Level 4, High-Tech Tower, <br /> Banani, Dhaka-1213, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-500" />
                <p>+880 1700-000000</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <p>support@contesthub.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <p>© {currentYear} ContestHub. Built for the future.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;