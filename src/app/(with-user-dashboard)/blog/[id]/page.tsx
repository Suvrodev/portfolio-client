import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = async ({ params }: IProps) => {
  const { id } = params;
  console.log("Params: ", params);
  console.log("id: ", id);
  const res = await fetch(`${process.env.BASE_URL}/blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog = data?.data;
  console.log("Blog: ", blog);

  return <div></div>;
};

export default BlogDetailPage;
