import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiArrowRight, FiZap } from 'react-icons/fi';
import ContestCard from '../pages/ContestCard';

const PopularContest = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get('https://contesthub-steel.vercel.app/popular-contests')
      .then(response => {
        setContests(response.data);
      })
      .catch(error => {
        console.error('Error fetching popular contests:', error);
      });
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50 dark:bg-[#05070a]">
      
      {/* Background Decor - Shundor mesh effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section with Glassy Badge */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-widest mb-6"
          >
            <FiZap className="animate-pulse" /> Community Favorites
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-6"
          >
            Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Contests</span> Now
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg font-medium"
          >
            Join the most participated challenges. Prove your skills and earn your spot on the leaderboard.
          </motion.p>
        </div>

        {/* Contest Grid - Responsive & Polished */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {contests.length > 0 ? (
            contests.map((contest, index) => (
              <motion.div
                key={contest?._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Popularity Badge for first 2 items */}
                {index < 2 && (
                    <div className="absolute -top-3 -right-3 z-20 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-tighter">
                        <FiTrendingUp /> Hot
                    </div>
                )}
                <ContestCard contest={contest} />
              </motion.div>
            ))
          ) : (
            // Skeleton Loader Effect
            [...Array(4)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 dark:bg-gray-800 rounded-[2rem] animate-pulse"></div>
            ))
          )}
        </div>

        {/* Action Area */}
        <div className="mt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/all-contests" 
              className="relative group inline-flex items-center gap-4 px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-black rounded-2xl overflow-hidden shadow-2xl transition-all hover:pr-16"
            >
              <span className="relative z-10">Explore Full Library</span>
              <FiArrowRight className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-8 transition-all duration-300" size={24} />
              
              {/* Button Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </motion.div>
          
          <p className="mt-6 text-gray-400 dark:text-gray-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-800"></span>
            Updated every hour
            <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-800"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularContest;