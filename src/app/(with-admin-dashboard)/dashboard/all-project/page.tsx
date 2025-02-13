import ProjectBox from "@/components/Project/ProjectBox/ProjectBox";
import { TProject } from "@/utils/types/globalTypes";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Project | Suvrodeb",
  description: "You can Show all Project and Can delete and Update Project",
};

const AllProjectPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/project/`, {
    next: { tags: ["projects"] }, // ✅ Enables auto-revalidation
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const projects = data?.data;
  // console.log("Projects: ", projects);

  return (
    <div>
      <h1>All Project page</h1>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects?.map((project: TProject, idx: number) => (
            <ProjectBox key={idx} project={project} admin={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectPage;
