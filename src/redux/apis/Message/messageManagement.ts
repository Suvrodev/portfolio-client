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
  }),
});

export const { useSendMessageMutation } = messageManagement;
