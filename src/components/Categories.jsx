// Sections/Categories.jsx
import React from "react";
import { FaPaintBrush, FaCode, FaCamera, FaMusic, FaGamepad } from "react-icons/fa";

const categoriesData = [
  {
    icon: <FaPaintBrush size={30} className="text-pink-500" />,
    title: "Art & Design",
    description: "Participate in creative art and design contests to showcase your talent."
  },
  {
    icon: <FaCode size={30} className="text-blue-600" />,
    title: "Coding & Tech",
    description: "Solve challenging coding contests and technology-related competitions."
  },
  {
    icon: <FaCamera size={30} className="text-yellow-500" />,
    title: "Photography",
    description: "Show your photography skills in contests and get recognized globally."
  },
  {
    icon: <FaMusic size={30} className="text-green-600" />,
    title: "Music & Audio",
    description: "Join music or audio-based contests and express your creativity."
  },
  {
    icon: <FaGamepad size={30} className="text-purple-600" />,
    title: "Gaming & Esports",
    description: "Compete in gaming tournaments and esports contests online."
  },
];

const Categories = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Categories</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore contests based on your interests and skills. Choose a category and start participating!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
