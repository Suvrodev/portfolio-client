"use client";
import { useUpdateProjectMutation } from "@/redux/apis/ProjectManagement/projectManagement";
import { sonarId } from "@/utils/sonarId";
import { TProject } from "@/utils/types/globalTypes";
import axios from "axios";
import React, {
  ChangeEvent,
  FormEvent,
  startTransition,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import UpdateIcon from "@mui/icons-material/Update";
import CreateIcon from "@mui/icons-material/Create";
import { Modal } from "antd";
import Image from "next/image";
import { revalidateProjects } from "@/app/actions/revalidateProjects";
import dynamic from "next/dynamic";

// import TextEditor from "@/components/Admin/TextEditor/TextEditor";
const TextEditor = dynamic(
  () => import("@/components/Admin/TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

const imageHostingUrl =
  "https://api.cloudinary.com/v1_1/dixfkupof/image/upload";

interface IProps {
  project: TProject;
}

const UpdateProject = ({ project }: IProps) => {
  // Hooks should be declared at the top in the same order for every render
  const [updateProject] = useUpdateProjectMutation();
  const {
    name,
    liveurl,
    frontendrepo,
    backendrepo,
    descriptions: content,
    image,
  } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [description, setDescription] = useState<string>(content);
  const [previewImage, setPreviewImage] = useState<string>(image || "");
  const imageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Modal Handlers
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  // Upload image logic
  const uploadImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "suvrodeb");
      formData.append("cloud_name", "dixfkupof");

      try {
        toast.loading("Uploading Image", { id: sonarId });
        const response = await axios.post(imageHostingUrl, formData);
        if (response.data.url) {
          const newImageUrl = response.data.url;
          toast.success("Image Uploaded", { id: sonarId });

          const updateData = { image: newImageUrl };

          const res = await updateProject({
            id: project?._id,
            updateData,
          }).unwrap();
          console.log("Change Image res: ", res);

          if (res?.status) {
            toast.success("Image Updated Successfully");
            startTransition(async () => {
              await revalidateProjects();
            });
          }
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Server issue while uploading image", { id: sonarId });
      }
    }
  };

  // Form submission logic
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submit");
    const Form = event.target as HTMLFormElement;
    const name = Form.projectName.value;
    const liveurl = Form.liveurl.value;
    const frontendrepo = Form.frontendrepo.value;
    const backendrepo = Form.backendrepo.value;

    const updateData = {
      name,
      liveurl,
      frontendrepo,
      backendrepo,
      descriptions: description,
    };
    console.log("update Data: ", updateData);
    toast.loading("Updating", { id: sonarId });
    const res = await updateProject({ id: project?._id, updateData }).unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      toast.success(res?.message, { id: sonarId });
      startTransition(async () => {
        await revalidateProjects();
      });
    }
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="p-2 bg-green-400 rounded-full shadow-md hover:bg-green-500 text-white transition-colors"
      >
        <UpdateIcon />
      </button>

      <Modal
        title="Update Blog"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width="50%"
      >
        <div className="form-container">
          <h2 className="text-4xl font-extrabold mb-6 text-teal-400 text-center">
            Update Project
          </h2>

          <div className="max-w-10/12 mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Image
                  src={previewImage}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
                  onClick={uploadImage}
                />

                <div className="absolute top-2 right-2 bg-green-500   rounded-full p-2  flex items-center justify-center">
                  <CreateIcon
                    className="  text-white text-xl cursor-pointer"
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
                  defaultValue={name}
                  className="w-full h-[50px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Live URL
                </label>
                <input
                  type="url"
                  name="liveurl"
                  defaultValue={liveurl}
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
                  defaultValue={frontendrepo}
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
                  defaultValue={backendrepo}
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
                Update Project
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateProject;
