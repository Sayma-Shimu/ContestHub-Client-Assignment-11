import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiGlobe, FiShield, FiZap } from 'react-icons/fi';

const ExtraSection = () => {
  const features = [
    {
      icon: <FiAward />,
      title: "Real Prizes",
      desc: "Cash rewards and exclusive physical prizes for every grand winner.",
      color: "from-amber-400 to-orange-600",
      glow: "group-hover:shadow-amber-500/40"
    },
    {
      icon: <FiGlobe />,
      title: "Global Reach",
      desc: "Compete and collaborate with elite creators from 120+ countries.",
      color: "from-blue-400 to-indigo-600",
      glow: "group-hover:shadow-blue-500/40"
    },
    {
      icon: <FiShield />,
      title: "Fair & Secure",
      desc: "Blockchain-grade security with transparent judging protocols.",
      color: "from-emerald-400 to-teal-600",
      glow: "group-hover:shadow-emerald-500/40"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#030508] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <FiZap className="animate-pulse" /> The ContestHub Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Why Choose <span className="italic font-serif">Us?</span>
          </motion.h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-gray-50 dark:bg-gray-900/40 backdrop-blur-xl p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800/50 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-gray-800 flex flex-col items-center text-center">
                
                {/* Icon Circle */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-4xl mb-8 shadow-xl transition-all duration-500 ${f.glow} transform group-hover:scale-110 group-hover:rotate-6`}>
                  {f.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase">
                  {f.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {f.desc}
                </p>

                {/* Decorative Bottom Bar */}
                <div className={`mt-8 w-12 h-1 bg-gradient-to-r ${f.color} rounded-full transition-all duration-500 group-hover:w-24`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
           <p className="text-gray-400 dark:text-gray-600 text-xs font-bold uppercase tracking-[0.4em] mb-4">Ready to win?</p>
           <div className="h-20 w-[1px] bg-gradient-to-b from-indigo-500 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraSection;