// Sections/Features.jsx
import React from "react";
import { FaTrophy, FaUsers, FaClock, FaStar } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaTrophy size={30} className="text-blue-700" />,
    title: "Exciting Contests",
    description: "Join a variety of contests and showcase your talent to win amazing prizes.",
  },
  {
    icon: <FaUsers size={30} className="text-green-600" />,
    title: "Community of Creators",
    description: "Collaborate and connect with other participants and creators globally.",
  },
  {
    icon: <FaClock size={30} className="text-purple-600" />,
    title: "Flexible Deadlines",
    description: "Participate at your own pace with contests having flexible submission deadlines.",
  },
  {
    icon: <FaStar size={30} className="text-yellow-500" />,
    title: "Earn Recognition",
    description: "Get recognized for your talent and achievements through our leaderboard system.",
  },
];

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore the unique features that make ContestHub a great place for creators and participants.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
