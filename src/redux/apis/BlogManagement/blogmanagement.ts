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
  }),
});

export const { useAddblogMutation } = blogManagement;
