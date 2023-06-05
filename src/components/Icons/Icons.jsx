import React from "react";
import "./icons.css";
import { BsGithub } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const Icons = ({ isOn }) => {
  return (
    <div className="icon-root" data-aos="fade-right" data-aos-duration="3000">
      <div className={`icon-content ${isOn ? "dark-mode" : "light-mode"}`}>
        <div className="icon">
          <div className="line-top"></div>
        </div>
        <div className="icon">
          <BsGithub />
        </div>
        <div className="icon">
          <AiOutlineTwitter />
        </div>
        <div className="icon">
          <AiFillInstagram />
        </div>
        <div className="icon">
          <AiFillLinkedin />
        </div>
        <div className="icon">
          <div className="line-bottom"></div>
        </div>
      </div>
    </div>
  );
};
