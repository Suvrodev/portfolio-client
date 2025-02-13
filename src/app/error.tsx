"use client";
import Link from "next/link";
import React from "react";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: IProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
      <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center">
        {/* Error Icon */}
        <div className="mb-8 p-6 bg-white/20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Text */}
        <h1 className="text-7xl font-bold mb-4 text-white">Oops!</h1>
        <p className="text-xl text-gray-200 mb-8">
          Something went wrong. Please try again later.
        </p>
        <p>{error?.message}</p>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all mb-4"
        >
          Retry
        </button>

        {/* Go Home Button */}
        <Link href="/">
          <button className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
