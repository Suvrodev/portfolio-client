"use client";

import { sonarId } from "@/utils/sonarId";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

const DashboardLogin = () => {
  const handleGoogleSignIn = () => {
    console.log("Google");
    signIn("google", { callbackUrl: "/contact" });
  };
  const handleDownloadCV = () => {
    // const cvUrl = "suvrodeb_CV.pdf";
    // const cvUrl =
    //   "https://drive.google.com/file/d/1RNvA2bvmi1KMBNbkNZJ0fcQLqpkDlpNm/view?usp=sharing";
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=1RNvA2bvmi1KMBNbkNZJ0fcQLqpkDlpNm";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Suvrodeb_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Downloading from google drive", { id: sonarId });
  };

  return (
    <div>
      {/* Download CV & Google Sign In */}
      <div className="flex flex-col gap-4 items-center mt-6">
        <button
          onClick={() => handleDownloadCV()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Download CV
        </button>
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
