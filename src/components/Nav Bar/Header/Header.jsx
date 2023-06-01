import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = ({ handleClick, isOn }) => {
  return (
    <div className={`header ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className="nav-bar">
        <div className="right-nav-bar">
          <ul>
            <NavLink to="/" className="no-underline">
              <li>About Me</li>
            </NavLink>
            <NavLink to="/skills" className="no-underline">
              <li>My Skills</li>
            </NavLink>
            <NavLink to="/projects" className="no-underline">
              <li>Projects</li>
            </NavLink>
            <NavLink to="/portfolio" className="no-underline">
              <li>Portfolio</li>
            </NavLink>
            <li>
              <button
                className={`toggle-button ${isOn ? "on" : "off"}`}
                onClick={handleClick}
              >
                <div className="circle"></div>
              </button>
            </li>
          </ul>
        </div>
        <div className="left-nav-bar">
          <NavLink to="/contactMe">
            <button>Contact Me</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
