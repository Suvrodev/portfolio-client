"use client";

import { useGetResumeQuery } from "@/redux/apis/Resume/resumeManagement";
import { setResumeData } from "@/redux/features/resumeSlice";
import { useAppDispatch } from "@/redux/hooks";
import { sonarId } from "@/utils/sonarId";
import { TResume } from "@/utils/types/globalTypes";
import { useEffect } from "react";
import { toast } from "sonner";

const DownloadResume = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetResumeQuery(undefined);
  const resumeArray = data?.data;
  const resume: TResume = resumeArray && resumeArray[0];
  // console.log("Resume in dashboard: ", resume);
  useEffect(() => {
    if (resume) {
      dispatch(setResumeData(resume));
    }
  }, [resume, dispatch]);

  const handleDownload = () => {
    console.log("Download Button");
    console.log("Resume: ", resume);

    if (resume) {
      const link = document.createElement("a");
      link.href = `${resume?.link}?dl=Resume.pdf`; // Force download
      link.setAttribute("download", "Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast.error("No resume link available.", { id: sonarId });
    }
  };

  if (isLoading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  return (
    <button
      onClick={handleDownload}
      className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105"
    >
      Download Resume
    </button>
  );
};

export default DownloadResume;
