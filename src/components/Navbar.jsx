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
      .catch((err) => {
        console.log(err);
        toast.error("Logout failed!");
      });
  };

  const gradientBtn =
    "bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-cyan-500/80 hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 text-white font-semibold transition-all duration-500";

 
  const menuItems = (
    <>
      <NavLink to="/" className={({ isActive }) => `block px-5 py-3 rounded-full font-medium transition ${isActive ? "bg-white/25" : "hover:bg-white/15"} text-white`}>
        Home
      </NavLink>
      <NavLink to="/all-contests" className={({ isActive }) => `block px-5 py-3 rounded-full font-medium transition ${isActive ? "bg-white/25" : "hover:bg-white/15"} text-white`}>
        All Contests
      </NavLink>
      <NavLink to="/extra" className={({ isActive }) => `block px-5 py-3 rounded-full font-medium transition ${isActive ? "bg-white/25" : "hover:bg-white/15"} text-white`}>
        Extra Section
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-cyan-600 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

        {/* logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-white/30 backdrop-blur-xl rounded-2xl ring-4 ring-white/40 group-hover:ring-cyan-300/70 group-hover:scale-110 transition-all duration-500 shadow-2xl">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-xl" />
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-2xl">ContestHub</span> {/* black → white */}
        </Link>

        {/* desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems}
        </div>

        {/* right Side */}
        <div className="flex items-center gap-4">
          {/* theme */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-3 rounded-full ${gradientBtn} shadow-md`}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* user profile */}
          {user?.email ? (
            <div ref={profileRef} className="relative">
              <img
                src={user.photoURL || userImage}
                alt="profile"
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-full ring-4 ring-white/50 cursor-pointer hover:ring-cyan-300 transition-all shadow-lg"
              />
              {openProfile && (
                <div className="absolute right-0 mt-3 w-48 bg-black/90 backdrop-blur-xl rounded-xl shadow-2xl p-4 z-50 border border-white/20">
                  <p className="font-bold text-white text-center mb-3">
                    {user.displayName || "User"}
                  </p>
                  <hr className="mb-3 border-white/30" />
                  <Link
                    to="/dashboard"
                    onClick={() => setOpenProfile(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-white/10 text-white font-medium transition"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-900/50 text-red-400 font-medium mt-2 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth/login" className={`px-6 py-3 rounded-full ${gradientBtn} shadow-md`}>
              Login
            </Link>
          )}

          {/* mobile menu toggle  */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-6 space-y-4">
          {menuItems}

          {user?.email ? (
            <>
              <NavLink
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className={`w-full px-5 py-3 rounded-full ${gradientBtn} shadow-md`}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setIsOpen(false)}
              className={`w-full block px-5 py-3 rounded-full ${gradientBtn} shadow-md text-center`}
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-full px-5 py-3 rounded-full ${gradientBtn} shadow-md text-center`}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;