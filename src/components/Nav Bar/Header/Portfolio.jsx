import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Portfolio = ({ handleClick, isOn, visible, show }) => {
  return (
    <div className="portfolio">
      <div className="navigation-bar-cont">
        <Header
          handleClick={handleClick}
          isOn={isOn}
          visible={visible}
          show={show}
        />
      </div>
      <Outlet />
    </div>
  );
};
