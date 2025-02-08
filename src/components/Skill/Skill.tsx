"use client";
import Marquee from "react-fast-marquee";

import html from "@/assets/svg/skills/html.svg";
import css from "@/assets/svg/skills/css.svg";
import javascript from "@/assets/svg/skills/javascript.svg";
import typescript from "@/assets/svg/skills/typescript.svg";
import react from "@/assets/svg/skills/react.svg";
import nextJS from "@/assets/svg/skills/nextJS.svg";
import tailwind from "@/assets/svg/skills/tailwind.svg";
import mongoDB from "@/assets/svg/skills/mongoDB.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import postgresql from "@/assets/svg/skills/postgresql.svg";
import git from "@/assets/svg/skills/git.svg";
import aws from "@/assets/svg/skills/aws.svg";
import bootstrap from "@/assets/svg/skills/bootstrap.svg";
import docker from "@/assets/svg/skills/docker.svg";
import go from "@/assets/svg/skills/go.svg";
import figma from "@/assets/svg/skills/figma.svg";
import firebase from "@/assets/svg/skills/firebase.svg";
import materialui from "@/assets/svg/skills/materialui.svg";
import nginx from "@/assets/svg/skills/nginx.svg";
import strapi from "@/assets/svg/skills/strapi.svg";
import SkillBox from "./SkillBox/SkillBox";
import { TSkill } from "@/utils/types/globalTypes";
const Skill = () => {
  const skillsArray = [
    { id: 1, title: "HTML", image: html },
    { id: 2, title: "CSS", image: css },
    { id: 3, title: "Javascript", image: javascript },
    { id: 4, title: "Typescript", image: typescript },
    { id: 5, title: "React", image: react },
    { id: 6, title: "Next JS", image: nextJS },
    { id: 7, title: "Tailwind", image: tailwind },
    { id: 8, title: "MongoDB", image: mongoDB },
    { id: 9, title: "MySQL", image: mysql },
    { id: 10, title: "PostgreSQL", image: postgresql },
    { id: 11, title: "Git", image: git },
    { id: 12, title: "AWS", image: aws },
    { id: 13, title: "Bootstrap", image: bootstrap },
    { id: 14, title: "Docker", image: docker },
    { id: 15, title: "Go", image: go },
    { id: 16, title: "Figma", image: figma },
    { id: 17, title: "Firebase", image: firebase },
    { id: 18, title: "MaterialUI", image: materialui },
    { id: 19, title: "Nginx", image: nginx },
    { id: 20, title: "Strapi", image: strapi },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Skill</h1>

      <div className="w-full mt-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex gap-5 ml-5">
            {skillsArray.map((skill: TSkill, idx: number) => (
              <SkillBox skill={skill} key={idx} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
