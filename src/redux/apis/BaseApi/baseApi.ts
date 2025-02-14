import { sonarId } from "@/utils/sonarId";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.BASE_URL,
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://portfolio-server-sandy-delta.vercel.app/api",
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
  // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
  let result: any = await baseQuery(args, api, extraOptions);
  console.log("Result in In Custom Base Query: ", result);

  if (result?.error?.status === 404 || result?.error?.status === 403) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }

  if (result?.error?.status === 500) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }
  if (result?.error?.status === 400) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }

  if (result.error?.status === 401) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }
  if (result.error?.status === 409) {
    toast.error(result?.error?.data?.message, { id: sonarId });
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["message", "blog", "project", "resume"],
});
