"use client";
import "./DashboardLogin.css";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

import DownloadResume from "../../DownloadResume/DownloadResume";
import { Tuser } from "@/utils/types/globalTypes";
import Logout from "../../Logout/Logout";

interface IProps {
  user: Tuser;
}
const DashboardLogin = ({ user }: IProps) => {
  const handleGoogleSignIn = () => {
    console.log("Google");
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div>
      {/* Download CV & Google Sign In */}
      <div className="flex flex-col gap-2 items-center justify-center mt-4  w-full px-4">
        <DownloadResume />
        {user === undefined ? (
          <button
            onClick={() => handleGoogleSignIn()}
            className="flex items-center gap-2 btn bg-yellow-400 text-white border-0 rounded-lg font-bold shadow-md hover:bg-yellow-500 transition duration-300"
          >
            <FaGoogle />
            Sign in with Google
          </button>
        ) : (
          <Logout admin={false} />
        )}
      </div>
    </div>
  );
};

export default DashboardLogin;
