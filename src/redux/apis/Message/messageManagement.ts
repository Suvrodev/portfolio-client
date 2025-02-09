import { baseApi } from "../BaseApi/baseApi";

const messageManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => {
        console.log("In redux: ", data);
        return {
          url: "/email",
          method: "POST",
          body: data,
        };
      },
    }),
    getMessage: builder.query({
      query: () => {
        return {
          url: "email",
          method: "GET",
        };
      },
      providesTags: ["message"],
    }),
    delteMessage: builder.mutation({
      query: (id: string) => {
        return {
          url: `email/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["message"],
    }),
    updateMessage: builder.mutation({
      query: ({ _id, updateData }) => {
        return {
          url: `email/update/${_id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["message"],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessageQuery,
  useDelteMessageMutation,
  useUpdateMessageMutation,
} = messageManagement;
