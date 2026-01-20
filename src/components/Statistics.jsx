// Sections/Statistics.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
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
    return <div className="text-center py-20">Loading statistics...</div>;
  }

  // Bar chart data: Contests vs Registrations
  const chartData = {
    labels: ["Total Contests", "Approved Contests", "Pending Contests", "Registrations"],
    datasets: [
      {
        label: "Counts",
        data: [
          stats.totalContests || 0,
          stats.approvedContests || 0,
          stats.pendingContests || 0,
          stats.totalRegistrations || 0,
        ],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "ContestHub Statistics" },
    },
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Statistics</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Overview of contests, participants, and registrations on ContestHub.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Contests</h3>
          <p className="text-2xl font-bold">{stats.totalContests}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Approved Contests</h3>
          <p className="text-2xl font-bold">{stats.approvedContests}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Pending Contests</h3>
          <p className="text-2xl font-bold">{stats.pendingContests}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="max-w-4xl mx-auto px-4">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Statistics;
