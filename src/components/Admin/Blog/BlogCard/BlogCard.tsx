"use client";
import { useDeleteBlogMutation } from "@/redux/apis/BlogManagement/blogmanagement";

import { TBlog } from "@/utils/types/globalTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { sonarId } from "@/utils/sonarId";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import UpdateBlog from "../UpdateBlog/UpdateBlog";

interface IProps {
  blog: TBlog;
}
const BlogCard = ({ blog }: IProps) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const { _id, title, content, image, category } = blog;

  const [trimmedContent, setTrimedContent] = useState("");
  useEffect(() => {
    const cutContent =
      content.length > 50 ? content.substring(0, 50) + "..." : content;
    setTrimedContent(cutContent);
  }, [content]);

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
          className="w-full h-full object-center"
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
        <UpdateBlog blog={blog} />
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Trash2 className="text-red-500 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
