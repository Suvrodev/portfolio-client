"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import addImage from "@/assets/AddImage/addImage.jpg";
import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import Image from "next/image";

const imageHostingUrl =
  "https://api.cloudinary.com/v1_1/dixfkupof/image/upload";

import { useAddProjectMutation } from "@/redux/apis/ProjectManagement/projectManagement";
import TextEditor from "../../TextEditor/TextEditor";

const AddProject = () => {
  const [addProject] = useAddProjectMutation();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(
    "<p>Project description...</p>"
  );

  const uploadImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const name = Form.projectName.value;
    const liveurl = Form.liveurl.value;
    const frontendrepo = Form.frontendrepo.value;
    const backendrepo = Form.backendrepo.value;

    const fileInput = Form.image.files[0];

    if (!fileInput) {
      toast.error("Please select an image", { id: sonarId });
      return;
    }

    const formData = new FormData();
    formData.append("file", fileInput);
    formData.append("upload_preset", "suvrodeb");
    formData.append("cloud_name", "dixfkupof");

    try {
      toast.loading("Uploading image...", { id: sonarId });
      const imageResponse = await axios.post(imageHostingUrl, formData);
      if (imageResponse?.data?.url) {
        const image = imageResponse.data.url;
        toast.success("Image uploaded successfully", { id: sonarId });

        const projectData = {
          name,
          liveurl,
          frontendrepo,
          backendrepo,
          image,
          descriptions: description,
        };

        toast.loading("Adding project...", { id: sonarId });
        const res = await addProject(projectData).unwrap();
        console.log("Res: ", res);
        if (res?.success) {
          toast.success(res?.message, { id: sonarId });
        }
      }
    } catch {
      toast.error("Error uploading image", { id: sonarId });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-teal-400 text-center">
          Add a New Project
        </h2>
        <div className="max-w-10/12 mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Image
                src={previewImage || addImage}
                alt="Preview"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={uploadImage}
              />
              <div className="absolute top-2 right-2 bg-green-500   rounded-full p-2  flex items-center justify-center">
                <CreateIcon
                  className="text-white text-xl cursor-pointer"
                  onClick={uploadImage}
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="projectName"
                required
                className="w-full h-[50px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Live URL</label>
              <input
                type="url"
                name="liveurl"
                required
                className="w-full h-[50px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Frontend Repository URL
              </label>
              <input
                type="url"
                name="frontendrepo"
                className="w-full h-[50px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Backend Repository URL
              </label>
              <input
                type="url"
                name="backendrepo"
                className="w-full h-[50px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Description
              </label>
              <TextEditor
                description={description}
                setDescription={setDescription}
              />
            </div>

            <input
              ref={imageRef}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
            <button
              type="submit"
              className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-500"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
