import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Portfolio = ({ handleClick, isOn }) => {
  return (
    <div className="portfolio">
      <div className="navigation-bar-cont">
        <Header handleClick={handleClick} isOn={isOn}/>
      </div>
      <Outlet />
    </div>
  );
};
