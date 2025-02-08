import "./page.css";
import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className="w-full overflow-auto" id="banner">
      <div>
        <Banner />
      </div>

      <div className=" px-5 md:px-36 py-10 aboutmeBgColor" id="about">
        <AboutMe />
      </div>
    </div>
  );
}
