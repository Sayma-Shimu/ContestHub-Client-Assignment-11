import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiChevronLeft, FiChevronRight, FiGrid } from "react-icons/fi";
import ContestCard from "./ContestCard";

const contestTypes = [
  "All", "Image Design", "Article Writing", "Gaming Review", 
  "Business Idea", "Programming", "Photography", 
  "Short Story Writing", "YouTube Thumbnail Design", "Tech Product Review"
];

const AllContests = () => {
  const [contests, setContests] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [limit] = useState(9); // 3x3 grid er jonne 9 best
  const [skip, setSkip] = useState(0);
  const [totalContests, setTotalContests] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://contesthub-steel.vercel.app/approved-contests?type=${activeTab}&limit=${limit}&skip=${skip}`)
      .then((response) => {
        setContests(response.data.contests);
        setTotalContests(response.data.totalCount);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
        setLoading(false);
      });
  }, [activeTab, skip, limit]);

  const handleTabClick = (type) => {
    setActiveTab(type);
    setSkip(0);
    setSearchTerm("");
  };

  const filteredContests = contests.filter((contest) =>
    contest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 transition-colors duration-500">
      
      {/* Hero Header */}
      <div className="bg-indigo-600 dark:bg-indigo-900/20 pt-28 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Explore All <span className="text-indigo-200">Contests</span>
          </motion.h1>
          <p className="text-indigo-100 max-w-2xl mx-auto text-lg opacity-80">
            Join the most exciting challenges, showcase your skills, and win amazing prizes.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        
        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 border border-gray-100 dark:border-gray-800 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:flex-1 group">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search by contest name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-[1.8rem] bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white"
              />
            </div>
            
            {/* Tab Count Info */}
            <div className="hidden md:flex items-center gap-2 px-6 py-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-[1.8rem] text-indigo-600 font-bold">
              <FiGrid /> <span>{totalContests} Contests Found</span>
            </div>
          </div>

          {/* Categories / Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 pb-2 overflow-x-auto no-scrollbar">
            {contestTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTabClick(type)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                  activeTab === type
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Contest Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8 h-96 items-center">
               <p className="col-span-3 text-center text-indigo-600 font-black animate-pulse text-2xl tracking-widest">LOADING...</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredContests.length > 0 ? (
                filteredContests.map((contest) => (
                  <ContestCard key={contest._id} contest={contest} />
                ))
              ) : (
                <div className="col-span-3 py-20 text-center bg-white dark:bg-gray-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
                   <p className="text-gray-500 text-xl font-bold">No contests found in this category.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fancy Pagination */}
        {totalContests > limit && (
          <div className="flex justify-center items-center gap-6 mt-16">
            <button
              onClick={() => setSkip(skip - limit)}
              disabled={skip === 0}
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 disabled:opacity-30 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all transition-duration-300"
            >
              <FiChevronLeft size={24} />
            </button>

            <div className="px-8 py-3 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 font-black text-gray-700 dark:text-indigo-400">
              {Math.floor(skip / limit) + 1} <span className="mx-2 text-gray-300">/</span> {Math.ceil(totalContests / limit)}
            </div>

            <button
              onClick={() => setSkip(skip + limit)}
              disabled={skip + limit >= totalContests}
              className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 disabled:opacity-30 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all transition-duration-300"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContests;