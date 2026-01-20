import { useEffect, useState } from "react";
import axios from "axios";
import ContestCard from "./ContestCard";

const contestTypes = [
  "All",
  "Image Design",
  "Article Writing",
  "Gaming Review",
  "Business Idea",
  "Programming",
  "Photography",
  "Short Story Writing",
  "YouTube Thumbnail Design",
  "Tech Product Review"
];

const AllContests = () => {
  const [contests, setContests] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalContests, setTotalContests] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://contesthub-steel.vercel.app/approved-contests?type=${activeTab}&limit=${limit}&skip=${skip}`
      )
      .then((response) => {
        setContests(response.data.contests);
        setTotalContests(response.data.totalCount);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
      });
  }, [activeTab, skip, limit]);

  const handleTabClick = (type) => {
    setActiveTab(type);
    setSkip(0);
    setSearchTerm(""); // Tab change হলে search clear
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Search filter applied
  const filteredContests = contests.filter((contest) =>
    contest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h2 className="text-3xl font-bold text-center mb-8 text-black">All Contests</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 text-black">
        {contestTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTabClick(type)}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === type
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search contests..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-black"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* Contest Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredContests.length > 0 ? (
          filteredContests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No contests found</p>
        )}
      </div>

      {/* Pagination */}
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
