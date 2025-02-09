"use client";
import "./SocialIconInBody.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import goLink from "@/utils/functions/goLink";
import goCall from "@/utils/functions/goCall";
import { useEffect, useState } from "react";

const SocialIconInBody = () => {
  const [showTopButton, setshowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
    });
  }, []);
  return (
    <div className="fixed right-20 top-1/2 transform -translate-y-1/2  font-bold text-2x">
      {showTopButton && (
        <div>
          <div
            className="KarnofuliIcons"
            onClick={() => goLink(" https://github.com/Suvrodev")}
          >
            <GitHubIcon className="text-white text-[26px]" />
          </div>
          <div
            className="Baroawlia"
            onClick={() => goLink("https://web.facebook.com/suvrodev.1122")}
          >
            <FacebookIcon className="text-white text-[26px]" />
          </div>
          <div className="PhoneCall" onClick={() => goCall()}>
            <CallIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIconInBody;
