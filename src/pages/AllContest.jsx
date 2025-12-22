import { useEffect, useState } from "react";
import axios from "axios";
import ContestCard from "./ContestCard";

const contestTypes = [
  "All", "Image Design", "Article Writing", "Gaming Review", "Business Idea",
  "Programming", "Photography", "Short Story Writing", "YouTube Thumbnail Design", "Tech Product Review"
];

const AllContests = () => {
  const [contests, setContests] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalContests, setTotalContests] = useState(0);

  useEffect(() => {
    axios
      .get(`https://contesthub-steel.vercel.app/approved-contests?type=${activeTab}&limit=${limit}&skip=${skip}`)
      .then((response) => {
        // নতুন অবজেক্ট ফরম্যাট অনুযায়ী ডাটা সেট করা
        setContests(response.data.contests);
        setTotalContests(response.data.totalCount);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
      });
  }, [activeTab, skip, limit]);

  const handleTabClick = (type) => {
    setActiveTab(type);
    setSkip(0); // ট্যাব পাল্টালে প্রথম পেজে ফিরে যাবে
  };

  const nextPage = () => {
    if (skip + limit < totalContests) {
      setSkip(skip + limit);
    }
  };

  const prevPage = () => {
    if (skip > 0) {
      setSkip(skip - limit);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">All Contests</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {contestTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTabClick(type)}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === type ? "bg-black text-white" : "bg-white hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {contests.length > 0 ? (
          contests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No contests found</p>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button 
          onClick={prevPage} 
          disabled={skip === 0} 
          className="px-6 py-2 bg-gray-800 text-white rounded-full disabled:bg-gray-300"
        >
          Previous
        </button>
        
        <span className="font-semibold">
          Page {Math.floor(skip / limit) + 1} of {Math.ceil(totalContests / limit) || 1}
        </span>

        <button
          onClick={nextPage}
          disabled={skip + limit >= totalContests}
          className="px-6 py-2 bg-gray-800 text-white rounded-full disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllContests;