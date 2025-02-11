import BlogCard from "@/components/Admin/Blog/BlogCard/BlogCard";
import { TBlog } from "@/utils/types/globalTypes";

const BlogPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/blog/`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const blogs = data?.data;
  //   console.log("Blog: ", blogs);
  return (
    <div className="p-2 md:p-5  sColor">
      <h1 className="text-2xl font-bold pText mb-10 text-white">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog: TBlog, idx: number) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
