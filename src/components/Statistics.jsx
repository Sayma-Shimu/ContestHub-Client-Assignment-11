import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { FiUsers, FiCheckCircle, FiClock, FiLayers, FiActivity } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://contesthub-steel.vercel.app/dashboard-stats")
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs">Analyzing Data...</p>
      </div>
    );
  }

  const chartData = {
    labels: ["Total", "Approved", "Pending", "Registrations"],
    datasets: [
      {
        label: "Market Performance",
        data: [
          stats.totalContests || 0,
          stats.approvedContests || 0,
          stats.pendingContests || 0,
          stats.totalRegistrations || 0,
        ],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)", 
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)", 
          "rgba(239, 68, 68, 0.8)", 
        ],
        borderRadius: 12,
        hoverBackgroundColor: "#4f46e5",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { grid: { display: false }, ticks: { color: "#9ca3af" } },
      x: { grid: { display: false }, ticks: { color: "#9ca3af", font: { weight: 'bold' } } },
    },
  };

  const statCards = [
    { label: "Total Users", val: stats.totalUsers, icon: <FiUsers />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Total Contests", val: stats.totalContests, icon: <FiLayers />, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { label: "Approved", val: stats.approvedContests, icon: <FiCheckCircle />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Pending", val: stats.pendingContests, icon: <FiClock />, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  return (
    <section className="py-28 bg-white dark:bg-[#030508] transition-colors duration-500 relative overflow-hidden">
      {/* Bg Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-indigo-100 dark:border-indigo-500/20"
          >
            <FiActivity className="animate-pulse" /> Real-time Insights
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Metrics</span>
          </motion.h2>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 flex items-center gap-6 group transition-all"
            >
              <div className={`w-14 h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110`}>
                {card.icon}
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{card.label}</p>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{card.val || 0}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bar Chart Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 dark:bg-gray-900/30 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Contest Distribution</h3>
              <p className="text-gray-500 text-xs font-medium mt-1">Detailed comparison across all contest states</p>
            </div>
            <div className="flex gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:flex">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Live</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Success</span>
            </div>
          </div>
          
          <div className="h-[400px] w-full relative">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;