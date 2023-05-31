import React from "react";
import "./portfolioOutline.css";
import { PortfolioFS } from "../components/PortfolioFS";
import { PortfolioSS } from "../components/PortfolioSS";
import { PortfolioTS } from "../components/PortfolioTS";

export const PortfolioOutline = () => {
  return (
    <div className="portfolio-outline">
      <div className={`portfolio-container`}>
        <div className="portfolio-outline-main">
          <PortfolioFS />
          <hr />
          <PortfolioSS />
          <hr />
          <PortfolioTS />
        </div>
      </div>
    </div>
  );
};
