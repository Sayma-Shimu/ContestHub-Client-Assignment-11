import React from "react";
import { motion } from "framer-motion";
import { FiEdit3, FiCode, FiCamera, FiMusic, FiActivity, FiArrowRight } from "react-icons/fi";

const categoriesData = [
  {
    icon: <FiEdit3 />,
    title: "Art & Design",
    description: "Express your vision through colors and digital shapes.",
    color: "from-pink-500 to-rose-600",
    shadow: "group-hover:shadow-pink-500/25",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: <FiCode />,
    title: "Coding & Tech",
    description: "Build the future with complex algorithms and code.",
    color: "from-blue-500 to-indigo-600",
    shadow: "group-hover:shadow-blue-500/25",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: <FiCamera />,
    title: "Photography",
    description: "Capture breathtaking moments and share your story.",
    color: "from-amber-400 to-orange-500",
    shadow: "group-hover:shadow-amber-500/25",
    border: "group-hover:border-amber-500/50"
  },
  {
    icon: <FiMusic />,
    title: "Music & Audio",
    description: "Compose sounds that resonate with global audiences.",
    color: "from-emerald-400 to-teal-500",
    shadow: "group-hover:shadow-emerald-500/25",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: <FiActivity />, 
    title: "Gaming & Esports",
    description: "Dominate the arena in competitive play and esports.",
    color: "from-purple-500 to-violet-600",
    shadow: "group-hover:shadow-purple-500/25",
    border: "group-hover:border-purple-500/50"
  },
];

const Categories = () => {
  return (
    <section className="py-28 bg-[#fafafa] dark:bg-[#030508] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            🔥 Top Competitions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-6 leading-none"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Domain</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed"
          >
            Don't just participate. Outperform. Explore our curated categories and find the perfect stage for your talent.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categoriesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-full"
            >
              {/* Outer Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-[2.5rem]`}></div>

              {/* Main Card */}
              <div className={`relative h-full bg-white dark:bg-gray-900/50 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] transition-all duration-500 ${category.border} ${category.shadow} flex flex-col items-center text-center`}>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-3xl mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {category.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {category.description}
                </p>

                {/* Hover Button */}
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <FiArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex justify-center"
        >
          <div className="p-[1px] rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full max-w-lg opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;