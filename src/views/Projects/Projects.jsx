import React from "react";
import "./projects.css";
import { Icons } from "../../components/Icons/Icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const Projects = ({ isOn }) => {
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
  const handleViewTicTacToe = () => {
    window.open("https://tic-tac-toe-pi-gold.vercel.app/", "_blank");
  };
  const handleGitTicTacToe = () => {
    window.open("https://github.com/Jolaoluwa17/tic-tac-toe", "_blank");
  };
  // const handleViewScribbleEase= () => {
  //   window.open("https://tic-tac-toe-pi-gold.vercel.app/", "_blank");
  // };
  const handleGitScribbleEase = () => {
    window.open("https://github.com/Jolaoluwa17/ScribbleEase", "_blank");
  };
  return (
    <div className={`projects-root ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className={`projects ${isOn ? "dark-mode" : "light-mode"}`}>
        <Icons isOn={isOn} />
        <div className="projects-title">
          <h1>Latest Projects</h1>
        </div>
        <div className="projects-content">
          <div className="project-card">
            <div className="image-container">
              <img src="/Images/2840443.jpg" alt="" />
            </div>
            <div className="new">
              <div className="intro">
                <p className="intro-title">ScribbleEase</p>
                <div className="intro-content">
                  <div className="tech-used">
                    <div className="title">
                      <p>Technology Used</p>
                    </div>
                    <div className="prog-lang">
                      <ul>
                        <li style={{ listStyle: "none" }}>React Native</li>
                        <li style={{ listStyle: "square" }}>CSS</li>
                        <li style={{ listStyle: "square" }}>NodeJs</li>
                        <li style={{ listStyle: "none" }}>ExpressJs</li>
                        <li style={{ listStyle: "square" }}>MongoDB</li>
                        <li style={{ listStyle: "square" }}>MaterialUI</li>
                      </ul>
                    </div>
                    <div className="interact-btn">
                      {/* <div className="view-btn-disabled" style={{backgroundcolor: "grey"}}>
                        <button onClick={handleView} disabled={true}>View</button>
                      </div> */}
                      <div className="git-btn">
                        <button onClick={handleGitScribbleEase}>GitHub</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              ScribbleEase is your go-to notepad app for effortless note-taking
              and organization. Its user-friendly interface ensures a smooth
              experience, while the seamless integration of drawing tools and
              cross-device synchronization makes it the perfect digital
              companion for capturing your thoughts and ideas.
            </div>
          </div>

          <div className="project-card">
            <div className="image-container">
              <img src="/Images/library.jpg" alt="" />
            </div>
            <div className="new">
              <div className="intro">
                <p className="intro-title">Library Management System</p>
                <div className="intro-content">
                  <div className="tech-used">
                    <div className="title">
                      <p>Technology Used</p>
                    </div>
                    <div className="prog-lang">
                      <ul>
                        <li style={{ listStyle: "none" }}>React Js</li>
                        <li style={{ listStyle: "square" }}>CSS</li>
                        <li style={{ listStyle: "square" }}>NodeJs</li>
                        <li style={{ listStyle: "none" }}>ExpressJs</li>
                        <li style={{ listStyle: "square" }}>MongoDB</li>
                        <li style={{ listStyle: "square" }}>MaterialUI</li>
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
            </div>
            <div className="content">
              The Library Management System is a comprehensive software solution
              that streamlines library operations. It offers features such as
              catalog management, borrower registration, book
              check-in/check-out, and reporting. With an intuitive interface, it
              simplifies library tasks, enhances efficiency, and facilitates
              seamless organization and access to library resources.
            </div>
          </div>

          <div className="project-card">
            <div className="image-container">
              <img src="/Images/tic-tac-toe3.jpg" alt="" />
            </div>
            <div className="new">
              <div className="intro">
                <p className="intro-title">Tic-Tac-Toe</p>
                <div className="intro-content">
                  <div className="tech-used">
                    <div className="title">
                      <p>Technology Used</p>
                    </div>
                    <div className="prog-lang">
                      <ul>
                        <li style={{ listStyle: "none" }}>Next Js</li>
                        <li style={{ listStyle: "square" }}>CSS</li>
                        <li style={{ listStyle: "square" }}>JavaScript</li>
                      </ul>
                    </div>
                    <div className="interact-btn">
                      <div className="view-btn">
                        <button onClick={handleViewTicTacToe}>View</button>
                      </div>
                      <div className="git-btn">
                        <button onClick={handleGitTicTacToe}>GitHub</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              The Tic Tac Toe game developed using Next.js is a modern web
              application that brings the classic game to life with a responsive
              user interface. Enjoy the seamless functionality, appealing
              design, and easy-to-use interface while playing this interactive
              game on various devices. Experience the power of Next.js in
              creating engaging web applications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
