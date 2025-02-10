import { baseApi } from "../BaseApi/baseApi";

const blogManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addblog: builder.mutation({
      query: (data) => {
        console.log("Blog data In redux: ", data);
        return {
          url: "/blog",
          method: "POST",
          body: data,
        };
      },
    }),
    deleteBlog: builder.mutation({
      query: (id) => {
        console.log("Blog id In redux: ", id);
        return {
          url: `/blog/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateBlog: builder.mutation({
      query: ({ id, updateData }) => {
        console.log("Blog id In redux: ", id);
        return {
          url: `/blog/update/${id}`,
          method: "PATCH",
          body: updateData,
        };
      },
    }),
  }),
});

export const {
  useAddblogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogManagement;
