"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

import DownloadResume from "../../DownloadResume/DownloadResume";

const DashboardLogin = () => {
  const handleGoogleSignIn = () => {
    console.log("Google");
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div>
      {/* Download CV & Google Sign In */}
      <div className="flex flex-col gap-4 items-center mt-6">
        <DownloadResume />
        <button
          onClick={() => handleGoogleSignIn()}
          className="flex items-center gap-2 btn bg-yellow-400 text-white border-0  rounded-lg font-bold shadow-md hover:bg-yellow-500 transition duration-300"
        >
          <FaGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default DashboardLogin;
