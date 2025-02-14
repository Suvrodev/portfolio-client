"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./AddBlog.css";

// import addImage from "@/assets/AddImage/addImage.jpg";
import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import { blogCategories } from "@/utils/Array/blogCategories";
import Image from "next/image";

import { useAddblogMutation } from "@/redux/apis/BlogManagement/blogmanagement";
import dynamic from "next/dynamic";
// import TextEditor from "../TextEditor/TextEditor";

const TextEditor = dynamic(() => import("../TextEditor/TextEditor"), {
  ssr: false,
});

// const checkAddImage="/public/assets/addImage/addImage.jpg"
//এভাবে নিলে vercel এ deploy করার পরে Image show করে না
// const addImage = "/assets/addImage/addImage.jpg"
import addImage from "@/assets/AddImage/addImage.jpg";
const imageHostingUrl =
  "https://api.cloudinary.com/v1_1/dixfkupof/image/upload";

const AddBlog = () => {
  const [addBlog] = useAddblogMutation();

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [category, setCategory] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>(
    " <p>Welcome to Suvrodeb Text Editor!</p>"
  );
  console.log("Description: ", description);

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.value;
    setCategory(data);
    // console.log("Data: ", data);
  };

  ///Select Image from without input file
  const uploadImage = () => {
    console.log("Upload Image");
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  //Set Image in preview Image
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("File selected: ", file); // Debugging
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(null);
    }
  };
  //   console.log("Image Preview: ", previewImage);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Form = event.target as HTMLFormElement;
    const title = Form.titlee.value;

    const fileInput = Form.image.files[0];

    if (!category) {
      toast.error("Category field is empty", { id: sonarId });
    }

    if (!fileInput) {
      toast.error("Please select an image", { id: sonarId });
      return;
    }
    // console.log("File input: ", fileInput);

    // Create FormData and append the file
    const formData = new FormData();
    formData.append("file", fileInput);
    formData.append("upload_preset", "suvrodeb");
    formData.append("cloud_name", "dixfkupof");
    console.log("Selected File:", fileInput);

    try {
      toast.loading("Inserting Image...", { id: sonarId });
      // Upload the image using Axios
      // const response = await axios.post(imageHostingUrl, formData);

      // console.log("Image Upload response: ", response);
      const imageResponse = await axios.post(imageHostingUrl, formData);

      console.log("Uploaded image response:", imageResponse);

      if (imageResponse?.data?.url) {
        const imageUrl = imageResponse?.data?.url; // Get the image URL
        console.log("Image uploaded successfully:", imageUrl);
        // toast.success("Image Upload successfully", { id: sonarId });

        ///Send Data in Back end
        const formData = {
          title,
          image: imageUrl,
          category,
          content: description,
        };
        console.log("Form Data: ", formData);
        toast.loading("Inserting Blog", { id: sonarId });
        const res = await addBlog(formData).unwrap();
        console.log("Res: ", res);
        if (res?.success) {
          toast.success(res?.message, { id: sonarId });
        }
      } else {
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-teal-400 text-center">
          Add a New Blog
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
                  className="text-white text-xl cursor-pointerr"
                  onClick={uploadImage}
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Title</label>
                <input
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
