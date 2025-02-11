"use client";
// import React, { useEffect, useState } from "react";
// import { TBlog } from "@/utils/types/globalTypes";

const Blogs = () => {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("/blogs.json")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl font-bold pText mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* {blogs.map((blog: TBlog, idx: number) => (
          <BlogBox key={idx} blog={blog} />
        ))} */}
      </div>
    </div>
  );
};

export default Blogs;
