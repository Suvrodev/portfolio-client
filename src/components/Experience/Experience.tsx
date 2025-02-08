"use client";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pText mb-10">Experience</h1>
      <div className="experience u-margin-bottom-md">
        <div className="experience-card primary ">
          <svg className="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div className="experience-gradient"></div>
          <div className="experience-info">
            <span className="experience-info-count">4+</span>
            <span className="experience-info-text">Year Of Experience</span>
          </div>
        </div>
        <div className="experience-card secondary">
          <svg className="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div className="experience-image">
            <div className="experience-gradient"></div>
          </div>
          <div className="experience-info">
            <span className="experience-info-count">80+</span>
            <span className="experience-info-text">Project Completed</span>
          </div>
        </div>
        <div className="experience-card tertiary">
          <svg className="experience-shape" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            ></rect>
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            ></rect>
          </svg>
          <div className="experience-image">
            <div className="experience-gradient"></div>
          </div>
          <div className="experience-info">
            <span className="experience-info-count">100+</span>
            <span className="experience-info-text">happy Clint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
