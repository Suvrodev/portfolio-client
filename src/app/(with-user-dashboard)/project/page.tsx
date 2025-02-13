import ProjectBox from "@/components/Project/ProjectBox/ProjectBox";
import { TProject } from "@/utils/types/globalTypes";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Project | Suvrodeb",
  description: "Welcome to Project page",
};

const ProjectPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/project/`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const projects = data?.data;
  // console.log("Projects: ", projects);
  return (
    <div className="p-2 md:p-5  sColor">
      <h1 className="text-2xl font-bold pText mb-10 text-white">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project: TProject, idx: number) => (
          <ProjectBox key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
