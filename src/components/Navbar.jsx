import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./provider/AuthProvider";
import logo from "../assets/contest_logo.png";
import userImage from "../assets/user.jpg";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import {
  FiSun, FiMoon, FiLogOut, FiLayout,
  FiHome, FiAward, FiZap, FiInfo, FiMail
} from "react-icons/fi";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [theme]);

  // Handle Outside Click for Profile Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) setOpenProfile(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      setUser(null);
      toast.success("Logged out Successfully!");
      setOpenProfile(false);
      setIsOpen(false);
    }).catch(() => toast.error("Logout failed!"));
  };

  
  const publicLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "All Contests", path: "/all-contests", icon: <FiAward /> },
    { name: "Success Stories", path: "/success-stories", icon: <FiZap /> },
  ];

  const privateLinks = [
    { name: "About Us", path: "/about-us", icon: <FiInfo /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const activeLinks = user?.email ? [...publicLinks, ...privateLinks] : publicLinks;

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-500 ${isScrolled
      ? theme === "dark" ? "bg-gray-950/80 shadow-2xl border-b border-gray-800" : "bg-white/80 shadow-lg border-b border-gray-100"
      : "bg-transparent"
      } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`p-1.5 rounded-xl ${theme === "dark" ? "bg-indigo-500/20" : "bg-indigo-600 shadow-indigo-500/30 shadow-lg"}`}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </motion.div>
          <span className={`text-2xl font-black tracking-tighter ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Contest<span className="text-indigo-600 italic">Hub</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {activeLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all duration-300 text-sm ${isActive
                  ? "bg-indigo-600 text-white shadow-lg"
                  : theme === "dark" ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`
              }
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2.5 rounded-xl transition-all ${theme === "dark" ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          {user?.email ? (
            <div ref={profileRef} className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                src={user.photoURL || userImage}
                alt="profile"
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-xl border-2 border-indigo-600 p-0.5 cursor-pointer object-cover shadow-lg"
              />

              <AnimatePresence>
                {openProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className={`absolute right-0 mt-4 w-64 rounded-[2rem] shadow-2xl border ${theme === "dark" ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-100"
                      } p-4 z-[110]`}
                  >
                    <div className="flex flex-col items-center pb-4 border-b border-gray-100 dark:border-gray-800">
                      <img src={user.photoURL || userImage} className="w-16 h-16 rounded-full mb-2 border-2 border-indigo-500 p-1" alt="" />
                      <p className="font-black text-center truncate w-full">{user.displayName || "User"}</p>
                      <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">Active Member</p>
                    </div>

                    <div className="py-2 space-y-1">
                      <Link to="/dashboard" onClick={() => setOpenProfile(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all font-bold group">
                        <FiLayout className="group-hover:text-indigo-600" /> Dashboard
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-all font-bold">
                        <FiLogOut /> Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to="/auth/login" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-lg shadow-indigo-500/25 hidden sm:block">
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`lg:hidden overflow-hidden ${theme === "dark" ? "bg-gray-950 border-gray-800" : "bg-white border-gray-100"} border-t shadow-2xl`}
          >
            <div className="px-6 py-8 space-y-4">
              {activeLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-xl font-black ${isActive ? "text-indigo-600" : theme === "dark" ? "text-gray-300" : "text-gray-600"}`
                  }
                >
                  <span className="bg-indigo-100 dark:bg-gray-800 p-2 rounded-lg">{link.icon}</span>
                  {link.name}
                </NavLink>
              ))}
              {!user?.email && (
                <Link to="/auth/login" onClick={() => setIsOpen(false)} className="block w-full py-4 bg-indigo-600 text-white text-center font-black rounded-2xl shadow-xl shadow-indigo-500/20">
                  Login to Access More
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;