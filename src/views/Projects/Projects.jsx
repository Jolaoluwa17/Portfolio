import React from "react";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const Projects = () => {
  const handleView = () => {
    window.open(
      "https://library-management-system-frontend.vercel.app/",
      "_blank"
    );
  };
  const handleGit = () => {
    window.open(
      "https://github.com/Jolaoluwa17/Library-Management-System-Frontend",
      "_blank"
    );
  };
  return (
    <div className="projects">
      <div className="projects-title">
        <h1>Latest Projects</h1>
      </div>
      <div className="projects-content">
        <div className="project-card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1685639086/Portfolio/Latest%20Projects/Screenshot_2023-06-01_180418_yts9gj.png"
              alt=""
            />
          </div>
          <div className="intro">
            <p style={{ fontSize: "20px", fontFamily: "Playfair" }}>
              Library Management System
            </p>
            <div className="intro-content">
              <div className="tech-used">
                <div className="title">
                  <p>Technology Used</p>
                </div>
                <div className="prog-lang">
                  <ul>
                    <li>React Js</li>
                    <li>CSS</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                    <li>MaterialUI</li>
                  </ul>
                </div>
                <div className="interact-btn">
                  <div className="view-btn">
                    <button onClick={handleView}>View</button>
                  </div>
                  <div className="git-btn">
                    <button onClick={handleGit}>GitHub</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            The Library Management System is a comprehensive software solution
            that streamlines library operations. It offers features such as
            catalog management, borrower registration, book check-in/check-out,
            and reporting. With an intuitive interface, it simplifies library
            tasks, enhances efficiency, and facilitates seamless organization
            and access to library resources.
          </div>
        </div>
      </div>
    </div>
  );
};
