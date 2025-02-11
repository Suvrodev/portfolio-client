import { ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WestIcon from "@mui/icons-material/West";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions/authOptions";
import { Tuser } from "@/utils/types/globalTypes";
import Link from "next/link";
import Logout from "@/components/Shared/Logout/Logout";
import DashboardItem from "@/components/Admin/DashboardItem/DashboardItem";

interface Iprops {
  children: ReactNode;
}
const layout = async ({ children }: Iprops) => {
  const session = await getServerSession(authOptions);
  // console.log("Session from dashboard", session);
  const user = session?.user as Tuser;

  return (
    <div>
      {/* Dashboard Header */}
      <div className="text-xl font-bold text-center bg-gradient-to-br from-gray-800 via-gray-900 to-black py-4 px-4 flex text-white">
        <div className="w-[33%] flex justify-start">
          {/* Menu Icon */}
          <label className="md:hidden" htmlFor="my-drawer-2">
            <MenuIcon className="cursor-pointer lg:hidden text-white" />
          </label>
        </div>
        <p className="w-[33%] text-white hidden md:block">Suvrodeb Portfolio</p>
        <div className="w-[33%] flex justify-center text-[12px] md:text-[16px] ">
          <p>{user?.email}</p>
          <span>user role</span>
        </div>
      </div>

      {/* Start Drawer */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="mx-4 md:mx-10 my-6 md:my-10">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 min-h-full w-80 p-4">
            {/* Sidebar content */}
            <div className="flex gap-x-4 items-center mb-6">
              <div className="bg-white text-black p-1 rounded-full">
                <Link href={"/"}>
                  <WestIcon />
                </Link>
              </div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>

            <div className="flex flex-col gap-4 my-4">
              <DashboardItem />

              <div>
                <Logout />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default layout;
