import CheckMessage from "@/components/Admin/Message/CheckMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Message | Suvrodeb",
  description: "You can Show All Message and Delete Message",
};

const page = () => {
  return (
    <div>
      <CheckMessage />
    </div>
  );
};

export default page;
