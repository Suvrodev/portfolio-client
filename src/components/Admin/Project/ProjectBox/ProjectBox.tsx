"use client";
import "./ProjectBox.css";

import chromeImage from "@/assets/chrome/chrome.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import goLink from "@/utils/functions/goLink";
import Image from "next/image";
import { TProject } from "@/utils/types/globalTypes";

interface IProps {
  project: TProject;
}

const ProjectBox = ({ project }: IProps) => {
  const { liveurl, image, name, frontendrepo, backendrepo } = project;
  return (
    <div className="rounded-md p-2 border-[2px] projectBoxBG">
      <div className="flex flex-col items-center">
        <div className="relative w-full h-60 overflow-hidden border-2 border-gray-300 rounded">
          <Image
            src={image}
            alt="Scrollable"
            width={250}
            height={150}
            className="absolute top-0 w-full transition-transform duration-[1500ms] ease-linear hover:-translate-y-[50%]"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-bold pText my-2">{name}</h2>
          <div className="info ">
            <div className="grid grid-cols-3 gap-2">
              <div className="relative rounded-lg inline-flex items-center justify-start px-7 mt-5 py-1 overflow-hidden font-medium transition-all bg-gradient-to-r from-emerald-500 to-blue-500 hover:bg-white group">
                <span className="w-48 h-28 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full  text-black transition-colors duration-300 ease-in-out group-hover:text-white flex gap-2 justify-center">
                  {/* <span className="text-[14px] font-bold">Live</span> */}
                  <Image
                    src={chromeImage}
                    alt="Chrome Image"
                    width={25}
                    height={25}
                    className="w-[25px] h-[20px]"
                    onClick={() => goLink(liveurl)}
                  />
                </span>
              </div>

              <div className="relative  rounded-lg inline-flex items-center justify-start px-7 mt-5 py-1 overflow-hidden font-medium transition-all bg-gradient-to-r from-emerald-500 to-blue-500 hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex gap-2 justify-center">
                  {/* <span className="font-bold text-base">Client </span> */}
                  <GitHubIcon onClick={() => goLink(frontendrepo)} />
                </span>
              </div>
              <div className="relative  rounded-lg inline-flex items-center justify-start px-7 mt-5 py-1 overflow-hidden font-medium transition-all bg-gradient-to-r from-emerald-500 to-blue-500 hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex gap-2 justify-center">
                  {/* <span className="font-bold text-base">Server</span> */}
                  <BrowserUpdatedIcon onClick={() => goLink(backendrepo)} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
