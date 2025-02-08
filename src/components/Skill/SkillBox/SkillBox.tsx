"use client";

import { TSkill } from "@/utils/types/globalTypes";
import Image from "next/image";

interface IProps {
  skill: TSkill;
}

const SkillBox = ({ skill }: IProps) => {
  const { title, image } = skill;
  return (
    <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] bg-[#130f49] rounded-lg flex flex-col items-center justify-center gap-1 md:gap-4">
      <Image
        src={image}
        alt="skill Image"
        height={25}
        width={25}
        className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
      />
      <h1 className="text-white font-bold text-[12px] md:text-xl">{title}</h1>
    </div>
  );
};

export default SkillBox;
