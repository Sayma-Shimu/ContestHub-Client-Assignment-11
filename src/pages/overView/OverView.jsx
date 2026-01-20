import { useEffect, useState } from "react";
import axios from "axios";

const OverView = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://contesthub-steel.vercel.app/dashboard-stats")
      .then(res => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading overview...</div>;
  }

  return (
    <div className="p-6 space-y-6">

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Contests</h2>
          <p className="text-2xl font-bold">{stats.totalContests}</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Approved Contests</h2>
          <p className="text-2xl font-bold">{stats.approvedContests}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Pending Contests</h2>
          <p className="text-2xl font-bold">{stats.pendingContests}</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Registrations</h2>
          <p className="text-2xl font-bold">{stats.totalRegistrations}</p>
        </div>
      </div>

      {/* Popular Contests Table */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">🔥 Top Popular Contests</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Contest Name</th>
                <th>Type</th>
                <th>Participants</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.popularContests?.map((contest, index) => (
                <tr key={contest._id}>
                  <td>{index + 1}</td>
                  <td>{contest.name}</td>
                  <td>{contest.contestType}</td>
                  <td>{contest.participantsCount}</td>
                  <td>
                    <span className="badge badge-success">
                      {contest.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default OverView;
