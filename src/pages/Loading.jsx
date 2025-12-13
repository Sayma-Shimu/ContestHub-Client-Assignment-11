import React from "react";
import { RingLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-white/60 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-3">
        <RingLoader size={80} color="#4f46e5" />
        <p className="text-indigo-600 font-semibold text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};
