// components/Navbar.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./provider/AuthProvider";
import logo from "../assets/contest_logo.png";
import userImage from "../assets/user.jpg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged out Successfully!");
        setOpenProfile(false);
        setIsOpen(false);
      })
      .catch(() => toast.error("Logout failed!"));
  };

  const primaryBtn = theme === "dark"
    ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white"
    : "bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white";

  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block px-5 py-3 rounded-full font-medium transition text-black ${
            isActive ? "bg-gray-300" : theme === "dark" ? "hover:bg-gray-300" : "hover:bg-gray-200"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-contests"
        className={({ isActive }) =>
          `block px-5 py-3 rounded-full font-medium transition text-black ${
            isActive ? "bg-gray-300" : theme === "dark" ? "hover:bg-gray-300" : "hover:bg-gray-200"
          }`
        }
      >
        All Contests
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          `block px-5 py-3 rounded-full font-medium transition text-black ${
            isActive ? "bg-gray-300" : theme === "dark" ? "hover:bg-gray-300" : "hover:bg-gray-200"
          }`
        }
      >
        About-Us
      </NavLink>
    </>
  );

  return (
    <nav className={`sticky top-0 z-50 shadow-md ${theme === "dark" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`p-2 ${theme === "dark" ? "bg-gray-300" : "bg-gray-100"} rounded-2xl ring-4 ring-gray-300 group-hover:ring-indigo-400 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            <img src={logo} alt="logo" className="w-12 h-12 rounded-xl object-cover" />
          </div>
          <span className="text-2xl font-bold drop-shadow-sm">ContestHub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">{menuItems}</div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-3 rounded-full ${primaryBtn} shadow-md transition-all`}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* User Profile / Login */}
          {user?.email ? (
            <div ref={profileRef} className="relative">
              <img
                src={user.photoURL || userImage}
                alt="profile"
                onClick={() => setOpenProfile(!openProfile)}
                className={`w-10 h-10 rounded-full ring-4 ${theme === "dark" ? "ring-gray-400" : "ring-gray-300"} cursor-pointer hover:ring-indigo-500 transition-all shadow-lg`}
              />
              {openProfile && (
                <div className={`absolute right-0 mt-3 w-48 ${theme === "dark" ? "bg-gray-200 text-gray-900" : "bg-white"} rounded-xl shadow-2xl p-4 z-50 border ${theme === "dark" ? "border-gray-300" : "border-gray-200"}`}>
                  <p className="font-bold text-center mb-3">{user.displayName || "User"}</p>
                  <hr className={`mb-3 ${theme === "dark" ? "border-gray-400" : "border-gray-300"}`} />
                  <Link
                    to="/dashboard"
                    onClick={() => setOpenProfile(false)}
                    className={`block px-4 py-2 rounded-lg ${theme === "dark" ? "hover:bg-gray-300" : "hover:bg-gray-100"} font-medium transition`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-red-600 font-medium mt-2 transition`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth/login" className={`px-6 py-3 rounded-full ${primaryBtn} shadow-md`}>Login</Link>
          )}

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden">
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${theme === "dark" ? "bg-gray-100" : "bg-white"} px-6 py-6 space-y-4 border-t ${theme === "dark" ? "border-gray-300" : "border-gray-200"}`}>
          {menuItems}
          {user?.email ? (
            <>
              <NavLink
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 rounded-full bg-gray-300 hover:bg-gray-400 transition font-medium text-black"
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className={`w-full px-5 py-3 rounded-full ${primaryBtn} shadow-md`}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setIsOpen(false)}
              className={`w-full block px-5 py-3 rounded-full ${primaryBtn} shadow-md text-center`}
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-full px-5 py-3 rounded-full ${primaryBtn} shadow-md flex items-center justify-center gap-2`}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
