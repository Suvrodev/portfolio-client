// "use client";
// import notFoundLottie from "@/assets/lottie/notfound.json";

// import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";

// const notFoundLottie = "./assets/lottie/notfound.json";

///Image Part
import notFoundImage from "@/assets/notFound/notFound.jpg";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
      <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center">
        {/* Lottie Animation */}
        <div className="w-72 h-72 mb-8">
          {/* <Lottie animationData={notFoundLottie} loop={true} /> */}
          <Image
            src={notFoundImage}
            alt="Not Found Image"
            width={450}
            height={350}
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-200 mb-8">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Go Home Button */}
        <Link href="/">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
