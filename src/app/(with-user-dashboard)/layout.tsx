import Footer from "@/components/Shared/Footer/Footer";
import React, { ReactNode } from "react";
import MobileHeader from "@/components/Shared/MobileHeader/MobileHeader";
import GotoTop from "@/components/Shared/GotoTop/GotoTop";
import SocialIconInBody from "@/components/Shared/SocialIconInBody/SocialIconInBody";
import UserDashboard from "@/components/Shared/UserDashboard/UserDashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions/authOptions";
import { Tuser } from "@/utils/types/globalTypes";
interface IProps {
  children: ReactNode;
}
const layout = async ({ children }: IProps) => {
  const session = await getServerSession(authOptions);
  // console.log("Session from dashboard", session);
  const user = session?.user as Tuser;
  // console.log("user in Sidebar: ", user);
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block h-[100vh] sticky top-0 ">
        <UserDashboard user={user} />
      </div>
      <div className="w-full md:w-[80%] bg-[#1c2854] ">
        <div className="md:hidden sticky top-0 z-50">
          <MobileHeader user={user} />
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
