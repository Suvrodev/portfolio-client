"use client";

import DownloadResume from "@/components/Shared/DownloadResume/DownloadResume";
import { useUpdateResumeMutation } from "@/redux/apis/Resume/resumeManagement";
import { useAppSelector } from "@/redux/hooks";
import { sonarId } from "@/utils/sonarId";
import axios from "axios";
import React, { FormEvent } from "react";
import { toast } from "sonner";
// const pdfHostingUrl = "https://api.cloudinary.com/v1_1/dixfkupof/upload";
const pdfHostingUrl = "https://api.cloudinary.com/v1_1/dixfkupof/raw/upload";

const ResumeComponent = () => {
  const { resume } = useAppSelector((state) => state?.resume);
  console.log("Global Resume: ", resume);
  const [updateResume] = useUpdateResumeMutation();

  const handleResumeUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fileInput = form.resume.files[0];

    if (!fileInput) {
      toast.error("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileInput);
    formData.append("upload_preset", "suvrodeb");
    formData.append("cloud_name", "dixfkupof");
    formData.append("resource_type", "raw"); // Ensures it's treated as a raw file (PDF)

    try {
      toast.loading("Uploading resume...", { id: sonarId });
      const response = await axios.post(pdfHostingUrl, formData);
      console.log("Response: ", response);
      if (response.data?.secure_url) {
        // setResumeLink(response.data.secure_url);
        // toast.success("Resume uploaded successfully!", { id: sonarId });
        // console.log("Link: ", response.data.secure_url);

        const forcedDownloadUrl = response.data.secure_url.replace(
          "/raw/upload/",
          "/raw/upload/fl_attachment/"
        );

        toast.success("Resume uploaded successfully!", { id: sonarId });
        console.log("Download Link: ", forcedDownloadUrl);

        toast.loading("Update Loading", { id: sonarId });
        const updateData = { link: forcedDownloadUrl };
        console.log("Resume data for update: ", updateData);
        const res = await updateResume({
          _id: resume?._id,
          updateData,
        }).unwrap();
        console.log("Res:::::::::::::::::::: ", res);
        if (res?.status) {
          toast.success("Resume Updated Successfully", { id: sonarId });
        }
      } else {
        toast.error("Failed to upload resume.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Upload New Resume
            </h1>
            <form onSubmit={handleResumeUpload} className="space-y-6">
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Upload
              </button>
            </form>
          </div>

          {/* Resume Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Suvrodeb Resume
            </h1>
            {/* <button
              onClick={handleDownload}
              className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              Download Resume
            </button> */}
            <DownloadResume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
