"use client";
import { Modal } from "antd";
import { TBlog } from "@/utils/types/globalTypes";
import UpdateIcon from "@mui/icons-material/Update";
import CreateIcon from "@mui/icons-material/Create";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";
import axios from "axios";
import Image from "next/image";
import { blogCategories } from "@/utils/Array/blogCategories";
import TextEditor from "../../TextEditor/TextEditor";
import { useUpdateBlogMutation } from "@/redux/apis/BlogManagement/blogmanagement";

const imageHostingUrl =
  "https://api.cloudinary.com/v1_1/dixfkupof/image/upload";

interface IProps {
  blog: TBlog;
}

const UpdateBlog = ({ blog }: IProps) => {
  // Hooks should be declared at the top in the same order for every render
  const [updateBlog] = useUpdateBlogMutation();
  const { title, content, image, category: bCategory } = blog;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState(bCategory);
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

  // Handle category change
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

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
          const res = await updateBlog({ id: blog?._id, updateData }).unwrap();

          if (res?.status) {
            toast.success("Image Updated Successfully");
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
    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;

    const updateData = { title, category, content: description };
    console.log("update Data: ", updateData);
    // alert("Update Data: " + JSON.stringify(updateData));
    toast.loading("Updating", { id: sonarId });
    const res = await updateBlog({ id: blog?._id, updateData }).unwrap();
    console.log("Res: ", res);
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
            Update Blog
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
                <CreateIcon
                  className="absolute top-2 right-2 text-white cursor-pointer"
                  onClick={uploadImage}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Title
                  </label>
                  <input
                    defaultValue={title}
                    type="text"
                    name="titlee"
                    required
                    className="w-full h-[65px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Category
                  </label>
                  <select
                    name="category"
                    value={category}
                    onChange={handleCategory}
                    required
                    className="w-full h-[65px] px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {blogCategories.map((data, idx) => (
                      <option key={idx} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
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
                Update Blog
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBlog;
