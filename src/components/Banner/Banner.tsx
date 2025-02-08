"use client";
import "./Banner.css";
import "./BannerText.css";

// import bounceImage from "@/Images/Banner/down-chevron.svg";
import bounceImage from "@/assets/Banner/down-chevron.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Banner = () => {
  const droplets = 70;
  // const [rainDrops, setRainDrops] = useState([]);
  const [rainDrops, setRainDrops] = useState<
    { x: number; y: number; o: number; a: number; d: number; s: number }[]
  >([]);

  useEffect(() => {
    const drops = [];
    for (let r = 0; r < droplets; r++) {
      drops.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        o: Math.random(),
        a: Math.random() + 0.5,
        d: Math.random() * 2 - 1,
        s: Math.random(),
      });
    }
    setRainDrops(drops);
  }, []);

  return (
    <div className="bgImage">
      <div className="rain-container  ">
        <div className="rain">
          {rainDrops.map((drop, index) => (
            <svg
              key={index}
              className="rain__drop"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 5 50"
              style={
                {
                  "--x": drop.x,
                  "--y": drop.y,
                  "--o": drop.o,
                  "--a": drop.a,
                  "--d": drop.d,
                  "--s": drop.s,
                } as React.CSSProperties
              }
            >
              <path
                stroke="none"
                d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
                fill="#a1c6cc"
                opacity={drop.o}
                transform={`scaleY(${drop.s * 1.5})`}
              />
            </svg>
          ))}
        </div>

        {/* Text start */}
        <div className="absolute top-20 md:top-auto">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              Frontend
              <span className="animate-text">
                <br className="block md:hidden " /> javascript react{" "}
              </span>
              Development
            </span>
            <span className="heading-primary-sub">
              Specializing in custom web development. If you are a business
              seeking a web presence or are looking to hire, contact me
              <span>
                <Link href="contact">here.</Link>
              </span>
            </span>
          </h1>

          <div className="flex justify-center mb-10">
            <button className="btn bg-white hover:bg-white text-black rounded-2xl">
              Get Started
            </button>
          </div>

          {/* <div className="relative"> */}
          <div className="arrow ">
            {/* <Link to="contact" smooth={true}> */}
            <Image
              src={bounceImage}
              alt="Arrow Image"
              width={50}
              height={50}
              className="arrowImage"
            />
            {/* </Link> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
