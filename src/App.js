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
          <iframe
            src="https://embed.lottiefiles.com/animation/11792"
            style={{ border: "none", height: "500px", width: "500px" }}
            title="introLoader"
          ></iframe>
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
