import React from "react";

const loadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="text-center">
        {/* Custom Loader with Glow Effect */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 w-full h-full border-8 border-t-transparent border-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-full h-full border-8 border-b-transparent border-white rounded-full animate-spin-reverse"></div>
        </div>

        {/* Animated Loading Text */}
        <p className="mt-6 text-white text-xl font-bold tracking-widest drop-shadow-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default loadingPage;
