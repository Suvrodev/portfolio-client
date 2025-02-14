"use client";
import { Typewriter } from "react-simple-typewriter";
import "./AboutMe.css";

// import firebaseImage from "../../../assets/AboutMe/Firebase.png";
// import firebaseImage from "@/assets/AboutMe/Firebase.png";
import reactImage from "@/assets/AboutMe/react.png";
// import suvrodebImage1 from "@/assets/AboutMe/Suvrodeb_1.png";
// import suvrodebImage2 from "@/assets/AboutMe/Suvrodeb_2.png";
// import tailwindImage from "@/assets/AboutMe/tailwind.png";
// import typescriptImage from "@/assets/AboutMe/ts.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="h-[1100px] w-full md:h-auto">
      <p> NICE TO MEET YOU!</p>
      <h1 className="text-2xl font-bold pText uppercase my-10 md:my-4">
        everything about me!
      </h1>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24  md:h-[577px] ">
        <div className="w-full md:w-1/2 flex items-center justify-center relative  ">
          <Image
            // src={suvrodebImage1}
            src="/me.png"
            alt="Suvrodeb Image"
            width={1920}
            height={700}
            className=" flex items-center justify-center"
          />

          <Image
            src={reactImage}
            // src="/assets/AboutMe/react.png"
            alt="React Image"
            width={60}
            height={60}
            className="w-[60x] h-[60px] rounded-md absolute top-0 md:top-[45px] left-[65px] md:left-[120px] abtAnim"
          />
          <Image
            // src={tailwindImage}
            src="/assets/AboutMe/tailwind.png"
            alt="Tailwind Image"
            width={60}
            height={60}
            className="w-[60x] h-[60px] rounded-md absolute top-10 md:top-[65px] right-[10px] md:right-[60px] abtAnim"
          />
          <Image
            // src={firebaseImage.src}
            src="/assets/AboutMe/Firebase.png"
            alt="Firebase Image"
            width={60}
            height={60}
            className="w-[60x] h-[60px] rounded-md absolute bottom-0 md:bottom-[45px] left-[65px] md:left-[120px] abtAnim"
          />
          <Image
            // src={typescriptImage}
            src="/assets/AboutMe/ts.png"
            alt="TS Image"
            width={60}
            height={60}
            className="w-[60x] h-[60px] rounded-md absolute bottom-0 md:bottom-10 right-0 abtAnim"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center ">
          <div>
            <span className="subTitle">Welcome to my world</span>
            <h1 className="aboutTitle">
              Hi I&apos;m <span>Suvrodeb</span>{" "}
            </h1>
            <div className="flex gap-4 ">
              <h1 className="aboutTitleDesc">I&apos;m a </h1>
              {
                <span className="aboutTitleDesc">
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "Mern Stack Developer",
                      "FullStact Developer",
                      "Specialist in Front end",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              }
            </div>
          </div>
          <h1 className="text-2xl font-bold pText uppercase my-4">-About Me</h1>
          <p className="text-justify">
            I am a highly skilled MERN stack developer specializing in{" "}
            <span className="text-[#ff014f] ">
              {" "}
              HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript,
              React, Next js, Express js, MongoDB, Mongoose, Google Firebase{" "}
            </span>
            and I also familiar with{" "}
            <span className="text-[#3E58D7]">Vue.js, react native</span> . With
            a commitment to excellence and a strong work ethic, I ensure
            top-quality, responsive, and efficient web solutions tailored to
            client needs. I approach every project with diligence, aiming to
            deliver robust and scalable applications. Let&apos;s collaborate to
            bring your vision to life with professional precision and
            dedication.
          </p>
          {/* <p className="mt-4">
            I have a lot of skills Html5, Css3, Sass, Bootstrap, Tailwind,
            JavaScript, React.js and Redux, and i also familiar with Vue.js
            Node.js, and MongoDB.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
