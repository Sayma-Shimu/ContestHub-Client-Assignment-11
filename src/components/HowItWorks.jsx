import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFileUpload, FaTrophy } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-4xl text-blue-500" />,
      title: "Explore Contests",
      description: "Browse through various categories like Design, Writing, or Gaming to find a contest that matches your skills.",
      color: "border-blue-500"
    },
    {
      id: 2,
      icon: <FaFileUpload className="text-4xl text-purple-500" />,
      title: "Register & Submit",
      description: "Pay a small entry fee to join, complete your task, and submit your work before the deadline hits.",
      color: "border-purple-500"
    },
    {
      id: 3,
      icon: <FaTrophy className="text-4xl text-orange-500" />,
      title: "Win & Earn",
      description: "Get recognized for your talent! If your submission is selected as the best, you'll win amazing prize money.",
      color: "border-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            How It Works
          </motion.h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Participating in ContestHub is easy. Follow these three simple steps to start your journey toward winning big rewards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 ${step.color} text-center relative`}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-full flex items-center justify-center font-bold text-gray-500 shadow-sm">
                {step.id}
              </div>

              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;