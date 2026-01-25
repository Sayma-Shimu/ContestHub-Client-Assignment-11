import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      detail: "support@contesthub.com",
      subDetail: "24/7 online support",
      color: "bg-blue-500"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      detail: "+880 1234 567890",
      subDetail: "Mon-Fri, 9am-6pm",
      color: "bg-green-500"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      detail: "123 Tech Tower, Dhaka",
      subDetail: "Bangladesh",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Let’s Start a <span className="text-indigo-600">Conversation</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Have questions about a contest or need technical support? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
              >
                <div className={`w-14 h-14 ${info.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                <p className="text-gray-900 dark:text-gray-100 font-semibold mb-1">{info.detail}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{info.subDetail}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="p-8 bg-indigo-600 rounded-[2rem] text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />, <FaGithub />].map((social, i) => (
                    <button key={i} className="w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200 dark:shadow-none border border-gray-100 dark:border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white appearance-none">
                  <option>General Inquiry</option>
                  <option>Contest Issue</option>
                  <option>Payment Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-3 text-lg hover:bg-indigo-700 transition-all"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Map or Office Hours Section */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 rounded-[3rem] overflow-hidden relative h-[400px] bg-gray-200 dark:bg-gray-800"
        >
          {/* Real Map Placeholder (You can use Google Map Embed here) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba94723!2sMirpur%2010!5e0!3m2!1sen!2sbd!4v1715456789012!5m2!1sen!2sbd" 
            className="w-full h-full grayscale dark:invert dark:opacity-80 transition-all duration-1000"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;