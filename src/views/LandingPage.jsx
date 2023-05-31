import React from "react";
import FirstSection from "../components/First Section/FirstSection";

import "./landingPage.css";

export const LandingPage = ({ handleClick, isOn }) => {
  return (
    <div className={`landing-page ${isOn ? "dark-mode" : "light-mode"}`}>
      <FirstSection handleClick={handleClick} isOn={isOn} />
    </div>
  );
};
