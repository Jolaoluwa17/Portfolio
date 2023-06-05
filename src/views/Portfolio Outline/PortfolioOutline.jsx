import React from "react";
import "./portfolioOutline.css";
import { PortfolioFS } from "../../components/Portfolio Main/PortfolioFS";
import { PortfolioSS } from "../../components/Portfolio Main/PortfolioSS";
import { PortfolioTS } from "../../components/Portfolio Main/PortfolioTS";

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
