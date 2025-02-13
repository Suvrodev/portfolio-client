import ProjectBox from "@/components/Admin/Project/ProjectBox/ProjectBox";
import { TProject } from "@/utils/types/globalTypes";

const Project = async () => {
  const res = await fetch(`${process.env.BASE_URL}/project/`, {
    cache: "force-cache",
  });
  const data = await res.json();
  // console.log("Data: ", data);
  const projects = data?.data;
  // console.log("Projects: ", projects);
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects?.map((project: TProject, idx: number) => (
          <ProjectBox key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
