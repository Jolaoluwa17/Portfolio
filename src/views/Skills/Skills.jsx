import React from "react";
import "./skill.css";
import { SpinningCube } from "../../components/Spinning Cube/SpinningCube";
import { Icons } from "../../components/Icons/Icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const Skills = ({ isOn }) => {
  return (
    <div className={`main-skills ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className={`skills ${isOn ? "dark-mode" : "light-mode"}`}>
        <Icons isOn={isOn} />
        <div className="skills-container">
          <div className="skills-header">
            <h1>Skills</h1>
          </div>
          <div
            className="skills-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3 style={{ fontWeight: "500" }}>Technical Level</h3>
            <p>
              I am skilled and proficient in various programming languages, with
              a strong focus on web development. With expertise in ReactJS,
              JavaScript, HTML, and CSS, I possesses a comprehensive
              understanding of the modern web development stack.
            </p>
            <br />
            <br />
            <h3 style={{ fontWeight: "500" }}>Tools Used</h3>
            <p>
              I rely on Visual Studio Code and Windows as my primary development
              environment, ensuring efficient coding and debugging. With a
              strong focus on version control, i leverage GitHub to manage code
              repositories and collaborate seamlessly with team members. In
              terms of UI/UX design, i harness the capabilities of Figma, a
              versatile design tool. For deployment, i utilize platforms like
              Vercel, Netlify, and Render to seamlessly deploy and host their
              web applications, providing a smooth user experience.
            </p>
          </div>
          <div className="rotating-cube">
            <SpinningCube isOn={isOn} />
          </div>
        </div>
      </div>
    </div>
  );
};
