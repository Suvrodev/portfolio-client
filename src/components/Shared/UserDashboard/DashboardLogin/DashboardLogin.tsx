"use client";

import { FaGoogle } from "react-icons/fa";

const DashboardLogin = () => {
  const handleGoogleSignIn = () => {};
  const handleDownloadCV = () => {
    const cvUrl = "suvrodeb_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Suvrodeb_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-red-700 transition duration-300"
        >
          <FaGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default DashboardLogin;
