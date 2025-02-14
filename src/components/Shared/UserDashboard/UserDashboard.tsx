"use client";
import "./UserDashboard.css";

import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

import goLink from "@/utils/functions/goLink";
import sendEmail from "@/utils/functions/sendEmail";
import goCall from "@/utils/functions/goCall";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LayoutDashboard } from "lucide-react";

import {
  Home as HomeIcon,
  Info as InfoIcon,
  RssFeed as RssFeedIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import Image from "next/image";
import DashboardLogin from "./DashboardLogin/DashboardLogin";
import Link from "next/link";
import { Tuser } from "@/utils/types/globalTypes";
interface IProps {
  user: Tuser;
}

const logoImage = "/assets/HeaderImage/myLogo.png";
const UserDashboard = ({ user }: IProps) => {
  return (
    // <div className="sticky top-0 bg-yellow-400">
    //   {/* <div className="relative top-0 bg-[#F3F9FF] h-full w-full flex flex-col items-center text-black"> */}
    //   <div className=" relative top-0 bg-[#F3F9FF]  h-[100vh] w-full flex flex-col items-center text-black overflow-hidden ">
    //     <div onClick={() => handleDownloadCV()}>
    //       <button
    //         className=" btn btn-primary z-10"
    //         onClick={() => goLink("https://x.com/suvrodev1408")}
    //       >
    //         Click
    //       </button>
    //     </div>
    //     <div className="mt-10 mb-8 ">
    //       <div className="cursor-pointer z-10 bg-yellow-400 flex justify-center items-center">
    //         <Image
    //           src={logoImage}
    //           alt="Suvrodeb"
    //           height={150}
    //           width={150}
    //           className="w-[150px] h-[150px] rounded-full"
    //         />
    //       </div>
    //       <p className="text-center mt-2 font-bold text-[24px] animate-text resizeForHeader z-10">
    //         Suvrodeb
    //       </p>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="flex flex-col gap-1 z-10">
    //       {[
    //         { label: "Home", Icon: HomeIcon },
    //         { label: "About Me", Icon: InfoIcon },
    //         { label: "Skill", Icon: InfoIcon },
    //         { label: "Service", Icon: ManageAccountsIcon },
    //         { label: "Blog", Icon: RssFeedIcon },
    //         { label: "Contact", Icon: EmailIcon },
    //       ].map(({ label, Icon }) => (
    //         <div key={label} className="flex gap-2 items-center cursor-pointer">
    //           <Icon className="opacity-50" />
    //           <span className="u-line-effect">{label}</span>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Social Icons */}
    //     <div className=" z-40">
    //       <div>
    //         <button
    //           className="btn btn-primary"
    //           onClick={() => {
    //             alert("Ok");
    //           }}
    //         >
    //           Click
    //         </button>
    //       </div>
    //       <div className="flex gap-4 items-center mt-8">
    //         <div
    //           onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}
    //         >
    //           <FaFacebookF />
    //         </div>
    //         <div onClick={() => goLink("https://x.com/suvrodev1408")}>
    //           <FaTwitter />
    //         </div>
    //         <div onClick={() => goLink("https://Wa.me/+8801518748081")}>
    //           <FaWhatsapp />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Contact Information */}
    //     <div className="pt-10 text-black text-[15px] z-10 text-center">
    //       <p>
    //         <span className="font-bold">Email: </span>
    //         <span onClick={sendEmail}> suvrodeb.cse@gmail.com</span>
    //       </p>
    //       <p>
    //         <span className="font-bold">Phone: </span>
    //         <span onClick={goCall}> +880 1951912997</span>
    //       </p>
    //     </div>

    //     {/* Footer */}
    //     <div className="absolute h-[100px] w-full bottom-0 flex justify-center z-0">
    //       <h1 className="z-20 bottom-1 absolute text-white text-center">
    //         Copyright © 2024 Suvrodeb <br /> All rights reserved.
    //       </h1>
    //       <div>
    //         <div className="waveHeader"></div>
    //         <div className="waveHeader"></div>
    //         <div className="waveHeader"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="sticky top-0">
      <div className="relative top-0 bg-[#F3F9FF] h-[100vh] w-full flex flex-col items-center text-black ">
        <div className="mt-10 mb-8">
          <div className="cursor-pointer z-10  flex justify-center items-center">
            <Image
              src={logoImage}
              // src="/assets/HeaderImage/myLogo.png"
              alt="Suvrodeb"
              height={150}
              width={150}
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>

          <p className="text-center mt-2 font-bold text-[24px] animate-text resizeForHeader z-10">
            Suvrodeb
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 z-10">
          {[
            { label: "Home", Icon: HomeIcon, link: "/" },
            { label: "Project", Icon: InfoIcon, link: "/projects" },
            { label: "Blog", Icon: RssFeedIcon, link: "/blog" },
            { label: "Contact", Icon: EmailIcon, link: "/contact" },
          ].map(({ label, Icon, link }) => (
            <Link
              key={label}
              href={link}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Icon className="opacity-50" />
              <span className="u-line-effect">{label}</span>
            </Link>
          ))}
          {user !== undefined && (
            <Link
              href={"/dashboard"}
              className="flex gap-2 items-center cursor-pointer"
            >
              <LayoutDashboard className="opacity-50" />
              <span>Dashboard</span>
            </Link>
          )}
        </div>
        <div className="z-40">
          <DashboardLogin user={user} />
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 items-center mt-8 z-40">
          <div onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}>
            <FaFacebookF />
          </div>
          <div onClick={() => goLink("https://x.com/suvrodev1408")}>
            <FaTwitter />
          </div>
          <div
            onClick={() =>
              goLink("https://www.linkedin.com/in/suvrodeb-howlader/")
            }
          >
            <LinkedInIcon />
          </div>
          <div onClick={() => goLink("https://github.com/Suvrodev")}>
            <GitHubIcon />
          </div>
          <div onClick={() => goLink("https://Wa.me/+8801518748081")}>
            <FaWhatsapp />
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-4 text-black text-[15px] z-10 text-center">
          <p>
            <span className="font-bold">Email: </span>
            <span onClick={sendEmail}> suvrodeb.cse@gmail.com</span>
          </p>
          <p>
            <span className="font-bold">Phone: </span>
            <span onClick={goCall}> +880 1951912997</span>
          </p>
        </div>

        {/* Footer */}
        <div className="absolute h-[100px] w-full bottom-0 flex justify-center z-0">
          <h1 className="z-20 bottom-1 absolute text-white text-center">
            Copyright © 2025 Suvrodeb <br /> All rights reserved.
          </h1>
          <div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
            <div className="waveHeader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
