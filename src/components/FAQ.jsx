import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaLightbulb, FaRocket, FaShieldAlt, FaWallet } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    icon: <FaRocket className="text-blue-500" />,
    question: "How do I participate in a contest?",
    answer: "Find a contest that fits your skills, click 'Details', and pay the entry fee. Once confirmed, you can submit your task directly through your dashboard before the deadline."
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-green-500" />,
    question: "Is my payment secure?",
    answer: "Absolutely! We use Stripe/SSLCommerz integration, ensuring your transaction is encrypted and 100% secure. We never store your card details."
  },
  {
    id: 3,
    icon: <FaLightbulb className="text-yellow-500" />,
    question: "How are winners selected?",
    answer: "Contest creators review all submissions based on creativity, technical skill, and adherence to instructions. The winner is declared publicly on the platform."
  },
  {
    id: 4,
    icon: <FaWallet className="text-purple-500" />,
    question: "How do I withdraw my prize?",
    answer: "Winning amounts are credited to your profile wallet. You can request a withdrawal to your bank or mobile wallet, and our team processes it within 24-48 hours."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4"
          >
            Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Questions?</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Everything you need to know about ContestHub</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={false}
              className={`rounded-3xl border transition-all duration-300 ${
                openId === faq.id 
                ? 'bg-white dark:bg-gray-900 border-blue-500/50 shadow-xl shadow-blue-500/10' 
                : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 ${
                    openId === faq.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white dark:bg-gray-800 text-gray-500 shadow-sm'
                  }`}>
                    {faq.icon}
                  </div>
                  <span className={`text-xl font-bold text-left transition-colors ${
                    openId === faq.id ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
                  <FaChevronDown />
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 ml-16 md:ml-18">
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-blue-600/20 pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
            <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500">
                <div className="bg-white dark:bg-gray-950 px-8 py-4 rounded-2xl flex items-center gap-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Still have questions?</span>
                    <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Contact Support</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;