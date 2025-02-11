"use server";
import { revalidateTag } from "next/cache";

export async function revalidateProjects() {
  revalidateTag("projects");
  revalidateTag("blogs");
}
