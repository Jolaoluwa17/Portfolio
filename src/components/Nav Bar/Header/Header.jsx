import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill, BsPersonFill } from "react-icons/bs";
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
  const [randomImage, setRandomImage] = useState("/Images/wink.jpg"); // Default image source
  const imageSources = [
    "/Images/smile.jpg",
    "/Images/wink.jpg",
    "/Images/49422.jpg",
    "/Images/54348.jpg",
    // Add more image sources as needed
  ];

  const handleSidebarOpen = () => {
    // Generate a random index to select a random image source from the array
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomImageSource = imageSources[randomIndex];

    setRandomImage(randomImageSource);
  };

  const [visible, show] = useState(false);
  const location = useLocation();

  useEffect(() => {
    show(false); // Close the navigation bar when the location changes
  }, [location]);

  const toggleSidebar = () => {
    show(!visible); // Toggle sidebar visibility
    handleSidebarOpen(); // Call the handleSidebarOpen function
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1OrEiyFpEjLkmXGJZfqKviBQAkWjKKJAF/view?usp=drive_link",
      "_blank"
    );
  };

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
            <li
              className="nav-hover-effect"
              style={{ cursor: "pointer" }}
              onClick={handleResume}
            >
              Resume
            </li>
            <li className="mode-changer">
              <button
                className={`toggle-button ${isOn ? "on" : "off"}`}
                onClick={handleClick}
              >
                <div className="circle"></div>
              </button>
              {isOn ? (
                <BsFillMoonStarsFill color="#25b6f4" />
              ) : (
                <FaSun color="#f4ca25" />
              )}
            </li>
          </ul>
        </div>

        {/*  Mobile Navigation Bar */}
        <div className="mobile-nav-bar">
          <nav className={!visible ? "navbar" : ""}>
            <div className="nav-btn">
              <input
                type="checkbox"
                id="checkbox"
                onChange={toggleSidebar}
                checked={visible}
              />
              <label for="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
            <div className="compressed-nav-bar">
              <div className="profile-pic">
                <img src={randomImage} alt="" />
              </div>
              <ul>
                <NavLink
                  to="/"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <BsPersonFill />{" "}
                    <div style={{ marginLeft: "15px" }}>About Me</div>
                  </li>
                </NavLink>
                <NavLink
                  to="/skills"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <GiSkills />{" "}
                    <div style={{ marginLeft: "15px" }}> My Skills </div>
                  </li>
                </NavLink>
                <NavLink
                  to="/projects"
                  className="no-underline"
                  activeclassname="active1"
                >
                  <li className="nav-hover-effect">
                    <AiFillProject />{" "}
                    <div style={{ marginLeft: "15px" }}>Projects</div>
                  </li>
                </NavLink>
                <li className="no-underline nav-hover-effect">
                  <AiTwotoneFolderOpen />{" "}
                  <div style={{ marginLeft: "15px" }}>Resume</div>
                </li>
                <li>
                  <div className="compressed-mode-changer">
                    {isOn ? <BsFillMoonStarsFill /> : <FaSun />}
                    {isOn ? (
                      <div onClick={handleClick} className="text">
                        Dark Mode
                      </div>
                    ) : (
                      <div onClick={handleClick} className="text">
                        Light Mode
                      </div>
                    )}
                  </div>
                </li>
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
