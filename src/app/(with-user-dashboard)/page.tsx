import "./page.css";
import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Blogs from "@/components/Blogs/Blogs/Blogs";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import MyService from "@/components/MyService/MyService/MyService";
import Pricing from "@/components/Pricing/Pricing";
import Project from "@/components/Project/Project/Project";
import Skill from "@/components/Skill/Skill";
import SkillLoading from "@/components/Skill/SkillLoading/SkillLoading";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="w-full overflow-auto" id="banner">
      <div>
        <Banner />
      </div>

      <div className=" px-5 md:px-36 py-10 aboutmeBgColor" id="about">
        <AboutMe />
      </div>

      <div className="px-5 md:px-36 py-10 sColor " id="experience">
        <Experience />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="service">
        <MyService />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="skill">
        <Skill />
      </div>
      <div className="p-2 md:p-10 sColor flex justify-start md:justify-center ">
        <SkillLoading />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="project">
        <Project />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="education">
        <Education />
      </div>
      <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="testimonial">
        <Testimonial />
      </div>
      <div className="px-5 md:px-36 py-10 sColor" id="price">
        <Pricing />
      </div>

      <div
        className="px-5 md:px-36 py-10 overflow-hidden aboutmeBgColor"
        id="blog"
      >
        <Blogs />
      </div>

      {/* <div>
        <Footer />
      </div> */}
      {/* <div className="px-5 md:px-36 py-10 aboutmeBgColor" id="testimonial">
        <TextEditor />
      </div> */}
    </div>
  );
}
