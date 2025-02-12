import Image from "next/image";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}
const ProjectDetailPage = async ({ params }: IProps) => {
  const id = params?.id;
  const res = await fetch(`${process.env.BASE_URL}/project/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const project = data?.data;
  //   console.log("project: ", project);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 1) 50%, rgba(79, 70, 229, 1) 100%)",
      }}
    >
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Project Image with Hover Effect */}
        <div className="relative w-full h-96 overflow-hidden group">
          <div className="relative inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 w-full" />
          <Image
            src={project?.image}
            alt={project?.name}
            // layout="fill"
            // objectFit="cover"
            width={250}
            height={250}
            // className="rounded-t-3xl transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-20%]"
            className="absolute top-0 w-full transition-transform duration-[1500ms] ease-linear md:hover:-translate-y-[50%]"
          />
          <div className="absolute bottom-6 left-6 z-20"></div>
        </div>
        <div className="p-8 text-black">
          <h1 className="text-5xl font-bold">{project?.name}</h1>
          <p className="text-lg  mt-2">
            Created on: {new Date(project?.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Project Details */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Description
            </h2>
            <div
              className="text-gray-700 text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
              dangerouslySetInnerHTML={{ __html: project?.descriptions }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project?.liveurl}
              target="_blank"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700"
              rel="noopener noreferrer"
            >
              🔗 Visit Live
            </a>
            <a
              href={project?.frontendrepo}
              target="_blank"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-teal-700"
              rel="noopener noreferrer"
            >
              💻 Frontend Repo
            </a>
            <a
              href={project?.backendrepo}
              target="_blank"
              className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-lg font-semibold rounded-xl hover:from-gray-800 hover:to-gray-900"
              rel="noopener noreferrer"
            >
              ⚙ Backend Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
