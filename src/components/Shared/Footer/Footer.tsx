"use client";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TungstenIcon from "@mui/icons-material/Tungsten";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import EmailIcon from "@mui/icons-material/Email";
import goLink from "@/utils/functions/goLink";
import goCall from "@/utils/functions/goCall";
import sendEmail from "@/utils/functions/sendEmail";
import DownloadResume from "../DownloadResume/DownloadResume";
const Footer = () => {
  return (
    <div>
      <div className="footerCursor footer-section font-bold mt-[60px] ">
        <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="">
            <h1 className="text-[24px]  footerTitle">Suvrodeb Howlader</h1>
            <div className="flex gap-4 items-center mt-8 text-white">
              <span
                onClick={() => goLink("https://www.facebook.com/suvrodev.1122")}
              >
                <FaFacebookF />
              </span>
              <span onClick={() => goLink("https://x.com/suvrodev1408")}>
                <FaTwitter />
              </span>
              <span
                onClick={() =>
                  goLink("https://www.linkedin.com/in/suvrodeb-howlader/")
                }
              >
                <LinkedInIcon />
              </span>
              <span onClick={() => goLink("https://github.com/Suvrodev")}>
                <GitHubIcon />
              </span>
              <span
                onClick={() => goLink("https://wa.me/message/V3FSQYVKY6HQL1")}
              >
                <FaWhatsapp />
              </span>
            </div>
            <div className=" mt-4 w-8/12">
              <DownloadResume />
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-[24px] font-bold mb-8">Contact Detail</h1>
            <div className="flex items-center">
              <div className="u-line-effect">
                <PhoneForwardedIcon />
                <span onClick={() => goCall()}>+880 1951912997</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="u-line-effect">
                <EmailIcon />
                <span onClick={() => sendEmail()}>suvrodeb.cse@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-[24px] font-bold mb-8">Quick Links</h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <InfoIcon className="opacity-50" />
                <span className="cursor-pointer u-line-effect">About me</span>
              </div>

              <div className="flex gap-2 items-center">
                <ManageAccountsIcon className="opacity-50" />
                <span className="cursor-pointer u-line-effect">Service</span>
              </div>

              <div className="flex gap-2 items-center">
                <TungstenIcon className="opacity-50 rotate-180" />
                <span className="cursor-pointer u-line-effect">Skill</span>
              </div>
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-[24px] font-bold mb-8">Our Services</h1>
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex items-center">
                <span className="u-line-effect">Responsive Web Design</span>
              </div>
              <div className="flex items-center">
                <span className="u-line-effect">Mern Stack Development</span>
              </div>
              <div className="flex items-center">
                <span className="u-line-effect">MongoDB Service</span>
              </div>
              <div className="flex items-center">
                <span className="u-line-effect">My SQL Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__waveWrapper bottom-wave waveAnimation">
          <div className="waveInner bgOne">
            <div className="wave waveOne"></div>
          </div>
          <div className="waveInner bgTwo">
            <div className="wave waveTwo"></div>
          </div>
          <div className="waveInner bgThree">
            <div className="wave waveThree"></div>
          </div>
          <div className="waveInner bgFour">
            <div className="wave waveFour"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
