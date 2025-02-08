import React from "react";
import Progressbar from "./Progressbar/Progressbar";

const SkillLoading = () => {
  return (
    <div className=" mb-12  w-full md:w-auto p-5 md:p-0">
      {/* <h1 className="text-2xl font-bold pText my-10 hm">Skill</h1> */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 ">
        <div className="flex flex-col gap-5">
          <Progressbar title={"Html"} percentage={95} />
          <Progressbar title={"CSS"} percentage={90} />
          <Progressbar title={"Bootstrap"} percentage={92} />
          <Progressbar title={"Tailwind"} percentage={98} />
        </div>
        <div className="flex flex-col gap-5">
          <Progressbar title={"React"} percentage={85} />
          <Progressbar title={"Next"} percentage={80} />
          <Progressbar title={"Express"} percentage={75} />
          <Progressbar title={"MongoDB"} percentage={70} />
        </div>
      </div>
    </div>
  );
};

export default SkillLoading;
