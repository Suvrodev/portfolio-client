import BlogCard from "@/components/Admin/Blog/BlogCard/BlogCard";
import { TBlog } from "@/utils/types/globalTypes";

const AllBlogPage = async () => {
  const res = await fetch("http://localhost:5000/api/blog/", {
    next: { tags: ["blogs"] },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  // console.log("Blogss: ", blogs);
  return (
    <div>
      <h1 className="text-white tetx-xl font-bold my-4">Checkout All Blog</h1>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs?.map((blog: TBlog, idx: number) => (
            <BlogCard key={idx} blog={blog} admin={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogPage;
