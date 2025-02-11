import Image from "next/image";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

const BlogDetailPage = async ({ params }: IProps) => {
  const { id } = params;
  const res = await fetch(`${process.env.BASE_URL}/blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog = data?.data;
  //   console.log("Blog: ", blog);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            {blog?.title}
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-lg text-gray-700 bg-pink-200 px-4 py-2 rounded-full shadow-md">
              Category:{" "}
              <span className="font-semibold text-purple-700">
                {blog?.category}
              </span>
            </p>
            <p className="text-sm text-gray-600 bg-indigo-200 px-4 py-2 rounded-full shadow-md">
              🗓️ Published on: {new Date(blog?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Blog Image */}
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl mb-12 transform hover:scale-105 transition-transform duration-300">
          <Image
            src={blog?.image}
            alt={blog?.title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Blog Content */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-101 transition-transform duration-300">
          <div
            dangerouslySetInnerHTML={{ __html: blog?.content }}
            className="prose prose-lg max-w-4xl mx-auto text-gray-800"
          />
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-12 text-center animate-bounce">
          <a
            href="/blogs"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110"
          >
            <span className="mr-2">←</span> Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
