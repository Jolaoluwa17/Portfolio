import React from "react";
import "./skillbar.css";
import { useState } from "react";

const SkillBar = ({ isOn }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  // const [isHovered7, setIsHovered7] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleHover5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const handleHover6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  return (
    // <div className="skillSection" id="about">
    <div className={`skillItems ${isOn ? "dark-mode" : "light-mode"}`}>
      <div
        className="skillItem"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="skillInfo">
          <p>HTML</p>
          <p>90%</p>
        </div>
        <div
          className={`progress-line ${isHovered ? "show" : "hide"}`}
          data-percent="90%"
        >
          <span style={{ width: "90%" }}></span>
        </div>
      </div>

      <div
        className="skillItem"
        onMouseEnter={handleHover6}
        onMouseLeave={handleMouseLeave6}
      >
        <div className="skillInfo">
          <p>CSS</p>
          <p>90%</p>
        </div>
        <div
          className={`progress-line ${isHovered6 ? "show" : "hide"}`}
          data-percent="90%"
        >
          <span style={{ width: "90%" }}></span>
        </div>
      </div>

      <div
        className="skillItem"
        onMouseEnter={handleHover2}
        onMouseLeave={handleMouseLeave2}
      >
        <div className="skillInfo">
          <p>JAVASCRIPT</p>
          <p>80%</p>
        </div>
        <div
          className={`progress-line ${isHovered2 ? "show" : "hide"}`}
          data-percent="80%"
        >
          <span style={{ width: "80%" }}></span>
        </div>
      </div>

      <div
        className="skillItem"
        onMouseEnter={handleHover3}
        onMouseLeave={handleMouseLeave3}
      >
        <div className="skillInfo">
          <p>REACT</p>
          <p>83%</p>
        </div>
        <div
          className={`progress-line ${isHovered3 ? "show" : "hide"}`}
          data-percent="83%"
        >
          <span style={{ width: "83%" }}></span>
        </div>
      </div>

      <div
        className="skillItem"
        onMouseEnter={handleHover5}
        onMouseLeave={handleMouseLeave5}
      >
        <div className="skillInfo">
          <p>React Native</p>
          <p>80%</p>
        </div>
        <div
          className={`progress-line ${isHovered5 ? "show" : "hide"}`}
          data-percent="80%"
        >
          <span style={{ width: "80%" }}></span>
        </div>
      </div>
      <div
        className="skillItem"
        onMouseEnter={handleHover1}
        onMouseLeave={handleMouseLeave1}
      >
        <div className="skillInfo">
          <p>NEXT JS</p>
          <p>70%</p>
        </div>
        <div
          className={`progress-line ${isHovered1 ? "show" : "hide"}`}
          data-percent="70%"
        >
          <span style={{ width: "70%" }}></span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SkillBar;
