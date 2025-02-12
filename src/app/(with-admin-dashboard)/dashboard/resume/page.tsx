"use client";
import { sonarId } from "@/utils/sonarId";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

// const pdfHostingUrl = "https://api.cloudinary.com/v1_1/dixfkupof/upload";
const pdfHostingUrl = "https://api.cloudinary.com/v1_1/dixfkupof/raw/upload";

const ResumePage = () => {
  const [resumeLink, setResumeLink] = useState<string | null>(null);

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
        setResumeLink(forcedDownloadUrl);
        toast.success("Resume uploaded successfully!", { id: sonarId });
        console.log("Download Link: ", forcedDownloadUrl);
      } else {
        toast.error("Failed to upload resume.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (resumeLink) {
      const link = document.createElement("a");
      link.href = `${resumeLink}?dl=Resume.pdf`; // Force download
      link.setAttribute("download", "Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast.error("No resume link available.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Upload Resume
        </h1>
        <form onSubmit={handleResumeUpload} className="space-y-4">
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>

        {resumeLink && (
          <div className="mt-6 text-center">
            <button
              onClick={handleDownload}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Download Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
