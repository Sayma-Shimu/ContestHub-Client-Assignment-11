import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiZap, FiStar, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // find contests----------
      navigate(`/all-contests?search=${searchValue}`);
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#05070a] pt-16">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20 blur-[100px]"
        />
      </div>

      {/* Decorative Icons */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none opacity-20">
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-20 text-indigo-400 text-6xl"><FiStar /></motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-32 text-purple-400 text-7xl"><FiAward /></motion.div>
        <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/3 right-1/4 text-yellow-400 text-4xl"><FiZap /></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md"
          >
            🚀 The #1 Platform for Global Creators
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]"
          >
            Show Your Talent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
              Win The Glory
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Join thousands of creators in high-stakes contests. From code to craft, 
            submit your best work and take home massive rewards.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-20"></div>
            
            <form 
              onSubmit={handleSearch}
              className="relative flex flex-col sm:flex-row gap-2 p-2.5 bg-gray-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.2rem] shadow-2xl"
            >
              <div className="relative flex-1 flex items-center">
                <FiSearch className="absolute left-6 text-indigo-500" size={22} />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="What are you looking for? (e.g. Logo Design, Article)"
                  className="w-full pl-16 pr-6 py-5 bg-transparent text-white outline-none placeholder:text-gray-500 font-bold text-lg"
                />
              </div>
              <button 
                type="submit" 
                className="px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-[1.8rem] transition-all duration-300 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                Search <span className="hidden md:inline">Now</span>
              </button>
            </form>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex flex-col items-center">
               <span className="text-white text-2xl font-black">20K+</span>
               <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Submissions</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
               <span className="text-white text-2xl font-black">$50K</span>
               <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Monthly Prizes</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
               <span className="text-white text-2xl font-black">99%</span>
               <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Satisfaction</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;