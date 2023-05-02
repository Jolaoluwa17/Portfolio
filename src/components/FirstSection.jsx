import React from "react";
import "./firstSection.css";

export const FirstSection = ({ isOn }) => {
  return (
    <div className={`first-section ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className="name">
        <h3>My name is Jolaoluwa</h3>
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
        <button>Hire Me</button>
      </div>
      <div className="latest-projects">
        <div className="container">
          <button>Hit Me</button>
          <div className="box">
            <div
              className="card"
              id="front"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274773/Portfolio/pngfind.com-react-logo-png-6854970_ivljdf.png"
                alt=""
              />
              ReactJs
            </div>
            <div
              className="card"
              id="back"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-microsoft-windows-microsoft-outlook-microsoft-office-microsoft-logo-s-text-rectangle-triangle-thumbnail_phfzji.png"
                alt=""
              />
              PowerFX
            </div>
            <div
              className="card"
              id="left"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail_cnke4e.png"
                alt=""
              />
              JavaScript
            </div>
            <div
              className="card"
              id="right"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-logo-css-css3-thumbnail_uhlvle.png"
                alt=""
              />
              CSS
            </div>
            <div
              className="card"
              id="top"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-logo-html5-brand-design-text-logo-number_xnons0.png"
                alt=""
              />
              HTML
            </div>
            <div
              className="card"
              id="bottom"
              style={isOn ? { backgroundColor: "white", color: "black", borderColor: "black" } : null}
            >
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail_gwks3n.png"
                alt=""
              />
              Python
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
