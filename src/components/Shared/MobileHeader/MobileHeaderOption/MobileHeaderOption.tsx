"use client";
import "./MobileHeaderOption.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TungstenIcon from "@mui/icons-material/Tungsten";
import EventNoteIcon from "@mui/icons-material/EventNote";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";

const MobileHeaderOption = () => {
  return (
    <div className="bg-[#130f49] text-white py-5">
      <div className="flex gap-2 justify-around">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <HomeIcon className="mhI" />
          <p className="text-[10px]">Home</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <InfoIcon className="mhI" />
          <p className="text-[10px]">About me</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <ManageAccountsIcon className="mhI" />
          <p className="text-[10px]">Service</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <TungstenIcon className="rotate-180 mhI" />
          <p className="text-[10px]">Skill</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <EventNoteIcon className="mhI" />
          <p className="text-[10px]">Testimonial</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <RssFeedIcon className="mhI" />
          <p className="text-[10px]">Blog</p>
        </div>

        <div className="flex flex-col justify-center items-center cursor-pointer">
          <EmailIcon className="mhI" />
          <p className="text-[10px]">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderOption;
