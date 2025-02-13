import AddBlog from "@/components/Admin/AddBlog/AddBlog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Add Blog | Suvrodeb",
  description: "You can Add Blog",
};

const AddBlogPagr = () => {
  return (
    <div>
      <AddBlog />
    </div>
  );
};

export default AddBlogPagr;
