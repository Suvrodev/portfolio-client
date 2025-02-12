import { baseApi } from "../BaseApi/baseApi";

const resumeManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addResume: builder.mutation({
      query: (data) => {
        console.log("In redux: ", data);
        return {
          url: "/resume",
          method: "POST",
          body: data,
        };
      },
    }),
    getResume: builder.query({
      query: () => {
        return {
          url: "/resume",
          method: "GET",
        };
      },
      providesTags: ["resume"],
    }),
    deleteResume: builder.mutation({
      query: (id: string) => {
        return {
          url: `/resume/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["resume"],
    }),
    updateResume: builder.mutation({
      query: ({ _id, updateData }) => {
        return {
          url: `/resume/update/${_id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["resume"],
    }),
  }),
});

export const {
  useAddResumeMutation,
  useGetResumeQuery,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
} = resumeManagement;
