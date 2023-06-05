import React from "react";
import "./spinningCube.css";

export const SpinningCube = ({ isOn }) => {
  return (
    <div className={`spinning-cube ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className="box-container">
        <button>Click Me!</button>
        <div className="box">
          <div className="card" id="front">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274773/Portfolio/pngfind.com-react-logo-png-6854970_ivljdf.png"
              alt=""
            />{" "}
            ReactJs
          </div>
          <div className="card" id="back">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-microsoft-windows-microsoft-outlook-microsoft-office-microsoft-logo-s-text-rectangle-triangle-thumbnail_phfzji.png"
              alt=""
            />{" "}
            PowerFX
          </div>
          <div className="card" id="left">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail_cnke4e.png"
              alt=""
            />{" "}
            JavaScript
          </div>
          <div className="card" id="right">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-logo-css-css3-thumbnail_uhlvle.png"
              alt=""
            />{" "}
            CSS
          </div>
          <div className="card" id="top">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-logo-html5-brand-design-text-logo-number_xnons0.png"
              alt=""
            />{" "}
            HTML
          </div>
          <div className="card" id="bottom">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1682274754/Portfolio/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail_gwks3n.png"
              alt=""
            />{" "}
            Next Js
          </div>
        </div>
      </div>
    </div>
  );
};
