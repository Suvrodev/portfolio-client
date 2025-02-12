"use client";

import { dashboardItems } from "@/utils/Array/dashboardItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardItem = () => {
  const path = usePathname();
  // console.log("path: ", path);
  return (
    <div className="flex flex-col gap-4 my-4">
      {dashboardItems.map((data) => (
        <Link
          key={data?.path}
          href={data?.path}
          className={`dashboardLink text-lg font-medium py-2 px-4 rounded-lg ${
            path === data?.path ? "bg-blue-600" : ""
          }`}
        >
          {data?.text}
        </Link>
      ))}
    </div>
  );
};

export default DashboardItem;
