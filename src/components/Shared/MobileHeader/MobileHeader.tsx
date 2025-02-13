"use client";
import { useState } from "react";
import "./MobileHeader.css";
// import me from "../../../../assets/HeaderImage/myLogo.png";
import me from "@/assets/HeaderImage/myLogo.png";
import Image from "next/image";
import MobileHeaderOption from "./MobileHeaderOption/MobileHeaderOption";
import { Tuser } from "@/utils/types/globalTypes";
interface IProps {
  user: Tuser;
}
const MobileHeader = ({ user }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // bg-[#0F172A]
  return (
    <div className=" w-full flex justify-between items-center py-2 px-5 bg-[#0F172A]  ">
      <Image
        src={me}
        alt="Suvrodeb"
        width={50}
        height={50}
        className="w-[50px] h-[50px] rounded-full"
      />
      <div>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed z-20 bottom-0 left-0 w-full transition-all duration-700">
          <MobileHeaderOption user={user} />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
