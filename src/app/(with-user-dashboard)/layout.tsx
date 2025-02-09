import Footer from "@/components/Shared/Footer/Footer";
import React, { ReactNode } from "react";
import DashboardPage from "./dashboard/page";
import MobileHeader from "@/components/Shared/MobileHeader/MobileHeader";
interface IProps {
  children: ReactNode;
}
const layout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block h-[100vh] sticky top-0 ">
        <DashboardPage />
      </div>
      <div className="w-full md:w-[80%] bg-[#333333] ">
        <div className="md:hidden sticky top-0 z-50">
          <MobileHeader />
        </div>
        <div>{children}</div>
        <div className="sticky top-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
