import Footer from "@/components/Shared/Footer/Footer";
import React, { ReactNode } from "react";
import MobileHeader from "@/components/Shared/MobileHeader/MobileHeader";
import GotoTop from "@/components/Shared/GotoTop/GotoTop";
import SocialIconInBody from "@/components/Shared/SocialIconInBody/SocialIconInBody";
import UserDashboard from "@/components/Shared/UserDashboard/UserDashboard";
interface IProps {
  children: ReactNode;
}
const layout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block h-[100vh] sticky top-0 ">
        <UserDashboard />
      </div>
      <div className="w-full md:w-[80%] bg-[#1c2854] ">
        <div className="md:hidden sticky top-0 z-50">
          <MobileHeader />
        </div>
        <div>{children}</div>
        <div className="sticky top-0 bg-yellow-500">
          <Footer />
        </div>
      </div>
      <div>
        <SocialIconInBody />
        <GotoTop />
      </div>
    </div>
  );
};

export default layout;
