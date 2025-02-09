"use client";
import "./UserDashboard.css";

import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logoImage from "@/assets/HeaderImage/myLogo.png";
import goLink from "@/utils/functions/goLink";
import sendEmail from "@/utils/functions/sendEmail";
import goCall from "@/utils/functions/goCall";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  RssFeed as RssFeedIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import Image from "next/image";

const UserDashboard = () => {
  return (
    <div className="sticky top-0 bg-yellow-400">
      <div className=" relative top-0 bg-[#F3F9FF]  h-[100vh] w-full flex flex-col items-center text-black overflow-hidden ">
        <div className="mt-10 mb-8 ">
          <div className="cursor-pointer z-10 bg-yellow-400 flex justify-center items-center">
            <Image
              src={logoImage}
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
            { label: "Home", Icon: HomeIcon },
            { label: "About Me", Icon: InfoIcon },
            { label: "Skill", Icon: InfoIcon },
            { label: "Service", Icon: ManageAccountsIcon },
            { label: "Blog", Icon: RssFeedIcon },
            { label: "Contact", Icon: EmailIcon },
          ].map(({ label, Icon }) => (
            <div key={label} className="flex gap-2 items-center cursor-pointer">
              <Icon className="opacity-50" />
              <span className="u-line-effect">{label}</span>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center mt-8 z-40">
          <div onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}>
            <FaFacebookF />
          </div>
          <div onClick={() => goLink("https://x.com/suvrodev1408")}>
            <FaTwitter />
          </div>
          <div onClick={() => goLink("https://Wa.me/+8801518748081")}>
            <FaWhatsapp />
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-10 text-black text-[15px] z-10 text-center">
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
            Copyright © 2024 Suvrodeb <br /> All rights reserved.
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
