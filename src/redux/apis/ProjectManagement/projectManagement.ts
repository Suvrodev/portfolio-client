import { baseApi } from "../BaseApi/baseApi";

const projectManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data) => {
        console.log("Blog data In redux: ", data);
        return {
          url: "/project",
          method: "POST",
          body: data,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        console.log("Blog id In redux: ", id);
        return {
          url: `/project/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateProject: builder.mutation({
      query: ({ id, updateData }) => {
        console.log("Blog id In redux: ", id);
        return {
          url: `/project/update/${id}`,
          method: "PATCH",
          body: updateData,
        };
      },
    }),
  }),
});

export const {
  useAddProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectManagement;
