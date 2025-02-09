import Footer from "@/components/Shared/Footer/Footer";
import React, { ReactNode } from "react";
import DashboardPage from "./dashboard/page";
interface IProps {
  children: ReactNode;
}
const layout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <div className="w-[20%] bg-blue-500">
        <DashboardPage />
      </div>
      <div className="w-[80%]">
        {/* <div className="md:hidden sticky top-0 z-50">
          <MobileHeader />
        </div> */}
        <div>{children}</div>
        <div className="sticky top-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
