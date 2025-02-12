export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/message",
    "/dashboard/add-project",
    "/dashboard/all-project",
    "/dashboard/add-blog",
    "/dashboard/all-blog",
    "/dashboard/resume",
  ],
};
