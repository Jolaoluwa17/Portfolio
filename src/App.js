import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./views/Landing Page/LandingPage";
import { useState, useEffect } from "react";
import { Portfolio } from "./components/Nav Bar/Header/Portfolio";
import { PortfolioOutline } from "./views/Portfolio Outline/PortfolioOutline";
import { ContactMe } from "./views/Contact Me/ContactMe";
import { Skills } from "./views/Skills/Skills";
import { Projects } from "./views/Projects/Projects";
// import { PacmanLoader } from "react-spinners";
function App() {
  const [isOn, setIsOn] = useState(true);
  const handleClick = () => {
    setIsOn(!isOn);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => {
      setShowContent(false);
    }, 6000);
  }, []); // 6 seconds

  return (
    <div>
      {showContent ? (
        <div className="intro-loader">
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
          <div className="loader" style={{ marginTop: "30px" }}>
            <div data-glitch="Loading..." className="glitch">
              Loading...
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              element={<Portfolio handleClick={handleClick} isOn={isOn} />}
            >
              <Route
                path="/"
                element={<LandingPage handleClick={handleClick} isOn={isOn} />}
              />
              <Route
                path="/contactMe"
                element={<ContactMe handleClick={handleClick} isOn={isOn} />}
              />
              <Route
                path="/skills"
                element={<Skills handleClick={handleClick} isOn={isOn} />}
              />
              <Route
                path="/projects"
                element={<Projects handleClick={handleClick} isOn={isOn} />}
              />
            </Route>
            <Route path="/portfolio" element={<PortfolioOutline />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
