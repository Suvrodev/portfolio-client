"use client";
import { useDeleteBlogMutation } from "@/redux/apis/BlogManagement/blogmanagement";
import "./BogCard.css";
import { TBlog } from "@/utils/types/globalTypes";
import Image from "next/image";
import React from "react";
import { sonarId } from "@/utils/sonarId";
import { toast } from "sonner";

interface IProps {
  blog: TBlog;
}
const BlogCard = ({ blog }: IProps) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const { _id, title, content, image, category } = blog;
  const trimmedContent =
    content.length > 50 ? content.substring(0, 50) + "..." : content;

  const handleDelete = async (id: string) => {
    console.log(`Deleting blog with ID: ${id}`);
    toast.loading("Deleting", { id: sonarId });
    try {
      const res = await deleteBlog(id).unwrap();
      console.log("Res: ", res);
      if (res?.status) {
        toast.success(res?.message, { id: sonarId });
      }
    } catch {}
  };

  const handleUpdate = () => {
    console.log(`Updating blog with ID: ${_id}`);
    // Add your update logic here (e.g., open a modal or form)
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ maxWidth: "300px" }}
    >
      {/* Blog Image */}
      <div className="w-full h-48 ">
        <Image
          src={image}
          alt={title}
          width={250}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h2 className="text-xl h-[90px] font-bold text-gray-800 mb-2">
          {title}
        </h2>
        {/* <div className="mb-4 h-12 text-sm text-gray-600 overflow-hidden">
          {content.length > 50 ? content.substring(0, 50) + "..." : content}
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: trimmedContent }} />
        {/* Category Section */}
        <div className="mt-2 w-50">
          <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          onClick={handleUpdate}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
