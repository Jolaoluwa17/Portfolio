import React from "react";
import "./firstSection.css";
import { Icons } from "../Icons/Icons";
import { BsFillSendFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init({
  easing: "ease", // default easing for AOS animations
  duration: 2000, // values from 0 to 3000, with step 50ms
});

export const FirstSection = ({ isOn }) => {
  return (
    <div className="first-section">
      <Icons isOn={isOn} />
      <div className={`name ${isOn ? "dark-mode" : "light-mode"}`}>
        <div className="welcome-text" style={{ height: "140px" }}>
          <Typewriter
            words={[" Hello!", "My Name is Jolaoluwa"]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </div>
        <p>
          I am a front-end programmer based in Nigeria. I am passionate about
          creating dynamic user experiences using UI effects and animations. I
          am a detail-oriented and organized problem-solver, and I value
          independence and teamwork equally. <br /> <br />
          In my free time, I enjoy outdoor activities, watching TV series, and
          reading English literature. As I am interested in all aspects of
          frontend development, I am always eager to work on ambitious projects
          with positive and like-minded individuals. <br /> <br /> As a student
          from Nigeria, I am actively seeking opportunities to develop my skills
          and gain experience in the field of front-end development.
        </p>
        <Link to="/contactMe" style={{ textDecoration: "none" }}>
          <div className="hire-btn">
            Hire Me <BsFillSendFill />
          </div>
        </Link>
      </div>
      <div className="illustration-one">
        <img
          src="https://res.cloudinary.com/dneawlwcp/image/upload/v1685541918/Portfolio/illustrations/19362653_kcxszx.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default FirstSection;
