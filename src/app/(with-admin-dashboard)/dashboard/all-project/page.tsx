import ProjectBox from "@/components/Project/ProjectBox/ProjectBox";
import { TProject } from "@/utils/types/globalTypes";
import React from "react";

const AllProjectPage = async () => {
  const res = await fetch("http://localhost:5000/api/project/", {
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
