import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = ({ handleClick, isOn }) => {
  
  return (
    <div className={`header ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className="nav-bar">
        <div className="right-nav-bar">
          <ul>
            <NavLink to="/" className="no-underline" activeclassname="active">
              <li className="nav-hover-effect">About Me</li>
            </NavLink>
            <NavLink
              to="/skills"
              className="no-underline"
              activeclassname="active"
            >
              <li className="nav-hover-effect">My Skills</li>
            </NavLink>
            <NavLink
              to="/projects"
              className="no-underline"
              activeclassname="active"
            >
              <li className="nav-hover-effect">Projects</li>
            </NavLink>
            <NavLink
              to="/portfolio"
              className="no-underline"
              activeclassname="active"
            >
              <li className="nav-hover-effect">Resume</li>
            </NavLink>
            <li className="mode-changer">
              <button
                className={`toggle-button ${isOn ? "on" : "off"}`}
                onClick={handleClick}
              >
                <div className="circle"></div>
              </button>
              {isOn ? <BsFillMoonStarsFill /> : <FaSun />}
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
