"use client";

import { useEffect, useState } from "react";
import ProjectBox from "../ProjectBox/ProjectBox";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectBox key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
