import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill, BsPersonFill } from "react-icons/bs";
import { FaAngleRight, FaAngleLeft, FaBars } from "react-icons/fa";
import {
  AiFillProject,
  AiTwotoneFolderOpen,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export const Header = ({ handleClick, isOn }) => {
  const [visible, show] = useState(false);
  const location = useLocation();

  useEffect(() => {
    show(false); // Close the navigation bar when the location changes
  }, [location]);

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

        {/*  Mobile Navigation Bar */}
        <div className="mobile-nav-bar">
          <div className="mobile-nav">
            <button className="mobile-nav-btn" onClick={() => show(!visible)}>
              <FaBars size={24} />
            </button>
          </div>
          <nav className={!visible ? "navbar" : ""}>
            <button
              type="button"
              className="nav-btn"
              onClick={() => show(!visible)}
            >
              {!visible ? (
                <FaAngleRight size={30} />
              ) : (
                <FaAngleLeft size={30} />
              )}
            </button>
            <div className="compressed-nav-bar">
              <div className="profile-pic">
                <img src="" alt="" />
              </div>
              <ul>
                <NavLink
                  to="/"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <BsPersonFill /> About Me
                  </li>
                </NavLink>
                <NavLink
                  to="/skills"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <GiSkills /> My Skills
                  </li>
                </NavLink>
                <NavLink
                  to="/projects"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <AiFillProject /> Projects
                  </li>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <AiTwotoneFolderOpen /> Resume
                  </li>
                </NavLink>
              </ul>
              <div className="contactContainer">
                <div className="contact-holder">
                  <div className="contact-icons">
                    <AiFillGithub />
                  </div>
                  <div className="contact-icons">
                    <AiOutlineTwitter />
                  </div>
                  <div className="contact-icons">
                    <AiFillInstagram />
                  </div>
                  <div className="contact-icons">
                    <AiFillLinkedin />
                  </div>
                </div>
                <div className="compressed-mode-changer">
                  {isOn ? <BsFillMoonStarsFill /> : <FaSun />}
                  {isOn ? (
                    <div onClick={handleClick}>Dark Mode</div>
                  ) : (
                    <div onClick={handleClick}>Light Mode</div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* End of mobile nav */}

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
