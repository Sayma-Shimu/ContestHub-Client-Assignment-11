import React from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Target, Sparkles, ShieldCheck, Zap } from "lucide-react";

const AboutUs = () => {
  // Animation Variants for Staggered Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      
      {/* Hero Section with Decorative Background */}
      <section className="relative pt-28 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Empowering the Next Generation of <span className="text-indigo-600">Creators.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            ContestHub is more than just a platform; it's a thriving ecosystem where your creativity is celebrated, rewarded, and pushed to the next level.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision: Floating Cards Style */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-indigo-100 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800"
          >
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              To provide a transparent and secure environment where creators can showcase their skills, participate in fair competitions, and earn the recognition they deserve.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl shadow-blue-100 dark:shadow-none p-10 border border-gray-100 dark:border-gray-800"
          >
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We aim to become the world's most trusted hub for creative minds—fostering innovation and bridging the gap between talent and opportunity across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ContestHub: Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
            Why Choose ContestHub?
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: <Users />, title: "Community First", desc: "Collaborate and grow with a network of talented global innovators." },
            { icon: <Trophy />, title: "Authentic Rewards", desc: "Win real prizes and build a portfolio that stands out in any industry." },
            { icon: <ShieldCheck />, title: "Safe & Secure", desc: "Enjoy peace of mind with encrypted payments and fair judging systems." },
            { icon: <Zap />, title: "Diverse Categories", desc: "From design to gaming—find the perfect contest for your unique talent." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="text-indigo-600 mb-6 transform group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to showcase your skills?</h2>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all transform active:scale-95 shadow-xl">
                Get Started Now
            </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;