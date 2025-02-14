import { Metadata } from "next";
import ResumeComponent from "@/components/Admin/Resume/ResumeComponent";
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
