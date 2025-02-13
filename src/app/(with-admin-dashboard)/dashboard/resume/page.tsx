import ResumeComponent from "@/components/Admin/Resume/ResumeComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Suvrodeb",
  description: "You can Add new Resume and Download exist resume",
};

const ResumePage = () => {
  return (
    <div>
      <ResumeComponent />
    </div>
  );
};

export default ResumePage;
