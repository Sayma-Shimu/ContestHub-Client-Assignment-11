import React from 'react'
import Banner from '../../components/Banner'
import ExtraSection from '../../components/ExtraSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
    </div>
  )
}

export default Home

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useAuth } from '../../hooks/useAuth'; // তুমি নিজের Auth hook বানাবে
// import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// const Home = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   // Popular Contests (highest participation count - backend থেকে sorted আসবে)
//   const { data: popularContests = [], isLoading: popularLoading } = useQuery({
//     queryKey: ['popularContests'],
//     queryFn: async () => {
//       const res = await axios.get('/api/contests/popular');
//       return res.data; // backend এ limit 6-8 রাখতে পারো
//     },
//   });

//   // Recent Winners for advertisement section
//   const { data: recentWinners = [] } = useQuery({
//     queryKey: ['recentWinners'],
//     queryFn: async () => {
//       const res = await axios.get('/api/winners/recent');
//       return res.data;
//     },
//   });

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/all-contests?search=${searchTerm}`);
//     }
//   };

//   const handleContestDetails = (id) => {
//     if (!user) {
//       Swal.fire({
//         title: 'Login Required',
//         text: 'Please login to view contest details',
//         icon: 'warning',
//         confirmButtonText: 'Go to Login',
//       }).then(() => navigate('/login'));
//     } else {
//       navigate(`/contest/${id}`);
//     }
//   };

//   const handleLogout = () => {
//     logOut();
//     Swal.fire('Logged Out!', '', 'success');
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
      {/* ==================== Navbar ==================== */}
      {/* <nav className="navbar bg-base-100 shadow-md fixed top-0 z-50">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            ContestHub
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-contests">All Contests</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || '/default-avatar.png'} alt="User" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                <li className="menu-title"><span>{user?.displayName}</span></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </nav> */}

    

   