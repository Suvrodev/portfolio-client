"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import studyLottie from "@/assets/lottie/Study-2.json";
import TimeLine from "./TimeLine/TimeLine";
import { TEducation } from "@/utils/types/globalTypes";

const Education = () => {
  const [educations, setEducation] = useState<TEducation[]>([]);

  useEffect(() => {
    fetch("/educations.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20">
      <h1 className="text-white font-bold pText my-4 text-center md:text-left">
        Education
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
        <div className="flex h-auto w-full md:w-1/2">
          <div className="w-[2px] pColor h-auto flex justify-center">
            <p className="h-full "></p>
          </div>
          <div className="w-[98%] flex flex-col gap-10">
            {educations.map((education: TEducation, idx: number) => (
              <TimeLine key={idx} education={education} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-start justify-center">
          <Lottie
            animationData={studyLottie}
            loop={true}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
