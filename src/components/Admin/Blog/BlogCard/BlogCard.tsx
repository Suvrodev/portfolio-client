"use client";
import { useDeleteBlogMutation } from "@/redux/apis/BlogManagement/blogmanagement";

import { TBlog } from "@/utils/types/globalTypes";
import Image from "next/image";
import React, { startTransition, useEffect, useState } from "react";
import { sonarId } from "@/utils/sonarId";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import UpdateBlog from "../UpdateBlog/UpdateBlog";
import { revalidateProjects } from "@/app/actions/revalidateProjects";
import { formatDate } from "@/utils/functions/formatDate";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
  blog: TBlog;
  admin?: boolean;
}
const BlogCard = ({ blog, admin = false }: IProps) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const { _id, title, image, category } = blog;

  const path = usePathname();
  const router = useRouter();

  const [trimmedTitle, setTrimmedTitle] = useState("");

  useEffect(() => {
    const result = title.length > 50 ? title.substring(0, 50) + "..." : title;
    setTrimmedTitle(result);
  }, [title]);

  const handleDelete = async (id: string) => {
    console.log(`Deleting blog with ID: ${id}`);
    toast.loading("Deleting", { id: sonarId });
    try {
      const res = await deleteBlog(id).unwrap();
      console.log("Res: ", res);
      if (res?.status) {
        toast.success(res?.message, { id: sonarId });
        startTransition(async () => {
          await revalidateProjects();
        });
      }
    } catch {}
  };

  const handleGoBlogDetail = (_id: string) => {
    if (path != "/blog") {
      console.log("in admin or Home");
      return;
    }
    router.push(`/project/${_id}`);
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ maxWidth: "300px" }}
      onClick={() => handleGoBlogDetail(_id)}
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
        <h2 className="text-[16px] h-[70px] font-bold text-gray-800 mb-2 ">
          {trimmedTitle}
        </h2>

        {/* Category Section */}
        <div className="mt-2 w-50">
          <div className="flex flex-col gap-2 items-start ">
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {category}
            </span>
            <div className="flex gap-x-2 items-center">
              <span className="bg-green-500 rounded-md py-1 px-4 text-white">
                Date:
              </span>
              <span>{formatDate(blog?.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {admin && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <UpdateBlog blog={blog} />
          <button
            onClick={() => handleDelete(_id)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Trash2 className="text-red-500 font-bold" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
