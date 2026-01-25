import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiClock, FiStar, FiZap, FiArrowUpRight } from "react-icons/fi";

const featuresData = [
  {
    icon: <FiAward />,
    title: "Exciting Contests",
    description: "Compete in high-tier challenges and claim your spot among the legends.",
    color: "#6366f1",
    bg: "bg-indigo-500/10",
  },
  {
    icon: <FiUsers />,
    title: "Global Network",
    description: "A borderless community of creators collaborating for greatness.",
    color: "#10b981", 
    bg: "bg-emerald-500/10",
  },
  {
    icon: <FiClock />,
    title: "Smart Deadlines",
    description: "Optimized timelines designed to respect and enhance your creative flow.",
    color: "#a855f7", 
    bg: "bg-purple-500/10",
  },
  {
    icon: <FiStar />,
    title: "Elite Status",
    description: "Unlock exclusive perks as you climb the ranks of our global leaderboard.",
    color: "#f59e0b", 
    bg: "bg-amber-500/10",
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-[#05070a] relative overflow-hidden">
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Floating Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            <FiZap className="animate-pulse" /> The Future of Creation
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8"
          >
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 italic">
              Excellence.
            </span>
          </motion.h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* Animated Border Beam Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]"></div>

              {/* Main Card */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 group-hover:bg-white/[0.07] overflow-hidden">
                
                {/* Floating Glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${feature.bg} blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150`}></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Box */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-10 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-[10deg] shadow-2xl"
                    style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed font-medium mb-12 flex-grow">
                    {feature.description}
                  </p>

                  {/* Corner Arrow */}
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <FiArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Footer Link */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex justify-center"
        >
          <button className="flex items-center gap-3 text-gray-500 hover:text-white transition-all font-bold tracking-widest uppercase text-xs group">
            Discover more features 
            <span className="w-12 h-[1px] bg-gray-800 group-hover:w-20 group-hover:bg-indigo-500 transition-all"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;