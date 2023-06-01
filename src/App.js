import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./views/Landing Page/LandingPage";
import { useState } from "react";
import { Portfolio } from "./components/Nav Bar/Header/Portfolio";
import { PortfolioOutline } from "./views/Portfolio Outline/PortfolioOutline";
import { ContactMe } from "./views/Contact Me/ContactMe";
import { Skills } from "./views/Skills/Skills";
import { Projects } from "./views/Projects/Projects";
function App() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Portfolio handleClick={handleClick} isOn={isOn} />}>
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
  );
}

export default App;
