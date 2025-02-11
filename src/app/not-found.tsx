"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
