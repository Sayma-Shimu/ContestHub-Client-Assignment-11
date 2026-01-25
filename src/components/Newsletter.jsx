import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaShieldAlt, FaBell } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (email) {
      // SweetAlert for CRUD/Action notification (Requirement)
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for subscribing! Check your inbox for the latest contests.',
        icon: 'success',
        confirmButtonColor: '#2563eb',
      });
      e.target.reset();
    }
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 shadow-2xl"
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaBell className="animate-bounce" /> Stay Updated
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Never Miss a <br /> 
                <span className="text-blue-200">Big Prize Contest!</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Subscribe to our newsletter and get exclusive notifications about new design, coding, and writing contests directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-blue-300" /> No Spam, Ever.
                </div>
                <div className="flex items-center gap-2">
                  <FaPaperPlane className="text-blue-300" /> Weekly Updates.
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white/10 backdrop-blur-lg p-2 rounded-3xl border border-white/20 shadow-inner">
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-5 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transform active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Subscribe Now <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;