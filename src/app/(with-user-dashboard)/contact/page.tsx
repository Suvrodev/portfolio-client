import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Suvrodeb",
  description:
    "Welcome to Contact page. You can contact with me giving your proper email and send detail in message",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
