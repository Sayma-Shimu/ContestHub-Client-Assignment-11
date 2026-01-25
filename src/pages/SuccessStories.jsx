import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

const winners = [
  {
    id: 1,
    name: "Tanvir Rahman",
    contest: "Modern UI/UX Challenge",
    prize: "$500",
    image: "https://i.ibb.co/5GzXkwq/user1.jpg",
    story: "Winning this contest was a turning point for my freelance career. The feedback from judges was invaluable!",
    category: "Design"
  },
  {
    id: 2,
    name: "Anika Tabassum",
    contest: "Creative Writing 2025",
    prize: "$300",
    image: "https://i.ibb.co/3WfS9Lz/user2.jpg",
    story: "I never thought my stories would reach so many people. ContestHub gave me the platform I needed.",
    category: "Writing"
  },
  {
    id: 3,
    name: "Jason Miller",
    contest: "React Speed Coding",
    prize: "$700",
    image: "https://i.ibb.co/vX0v9zN/user3.jpg",
    story: "The competition was tough, but the thrill of winning against top developers was amazing.",
    category: "Development"
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-28 pb-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 bg-yellow-500/10 rounded-2xl mb-4"
          >
            <FaTrophy className="text-yellow-500 text-3xl" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Our <span className="text-indigo-600">Champions</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Real people, real talent, and real rewards. Explore the stories of those who pushed their limits and came out on top.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <img 
                    src={winner.image} 
                    alt={winner.name} 
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white dark:ring-gray-800 shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{winner.name}</h3>
                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{winner.category}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Won Contest:</h4>
                  <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight">{winner.contest}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl mb-8 relative">
                  <FaQuoteLeft className="text-indigo-200 dark:text-gray-700 text-3xl absolute top-4 left-4" />
                  <p className="italic text-gray-600 dark:text-gray-300 relative z-10 pl-6">
                    {winner.story}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-gray-900 dark:text-white">
                    <span className="text-xs text-gray-500 block uppercase font-bold tracking-widest">Prize Won</span>
                    <span className="text-2xl font-black text-green-600">{winner.prize}</span>
                  </div>
                  <button className="p-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;