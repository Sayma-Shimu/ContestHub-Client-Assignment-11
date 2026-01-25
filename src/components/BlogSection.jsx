import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUser, FaComments } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: "Mastering the Art of Design Contests",
    excerpt: "Learn the secret strategies that top designers use to consistently win high-prize contests and build a stellar portfolio.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600",
    author: "Admin",
    date: "Jan 24, 2026",
    category: "Design",
    comments: 12
  },
  {
    id: 2,
    title: "The Psychology of a Winning Proposal",
    excerpt: "Understanding what judges look for can give you a massive edge. We dive deep into the psychology of decision-making.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea7028c?q=80&w=600",
    author: "Sara Khan",
    date: "Jan 22, 2026",
    category: "Business",
    comments: 8
  },
  {
    id: 3,
    title: "Essential Tools for Remote Creators",
    excerpt: "Boost your productivity with these 10 essential tools every creative professional needs in their digital toolkit this year.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600",
    author: "Rakib Ahmed",
    date: "Jan 18, 2026",
    category: "Tech",
    comments: 15
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-[#f8fafc] dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            Insights & Updates
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-6"
          >
            From the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Newsroom</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Stay ahead of the curve with expert tips, industry news, and success stories from our global community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <button className="text-white flex items-center gap-2 font-semibold">
                     Read Full Story <FaArrowRight className="text-sm" />
                   </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <FaUser className="text-blue-600" />
                    </div>
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                    <span className="flex items-center gap-1"><FaComments /> {blog.comments}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                   <a href="#" className="inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all">
                     View Details <FaArrowRight />
                   </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1">
            Explore All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;