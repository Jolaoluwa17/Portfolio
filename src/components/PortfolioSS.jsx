import React from "react";
import "./portfolioSS.css";

export const PortfolioSS = () => {
  return (
    <div className="portfolio-SS">
      <div className="portfolio-SS-left" style={{ width: "270px" }}>
        <div className="portfolio-SS-left-title">
          <h3>CERTIFICATION</h3>
        </div>
        <div className="skills">
          {/* <ul style={{ listStyle: "disc" }}>
            <li style={{ listStyle: "square" }}>Creative Thinking</li>
            <li style={{ listStyle: "square" }}>Strong Decision Maker</li>
            <li style={{ listStyle: "square" }}>Problem Solving</li>
            <li style={{ listStyle: "square" }}>Creative Design</li>
            <li style={{ listStyle: "square" }}>Teamwork</li>
            <li style={{ listStyle: "square" }}>Service Oriented</li>
          </ul> */}
        </div>
      </div>
      <div className="portfolio-SS-right" style={{ width: "560px" }}>
        <div className="portfolio-SS-left-title">
          <h3>EDUCATION</h3>
        </div>
        <div className="content" style={{ fontSize: "10px" }}>
          <div className="First">
            <div className="content-title">
              <b>BABCOCK UNIVERSITY</b>
              <b>Ilisan-Remo, Ogun State</b>
            </div>
            <div className="content-title">
              <b>BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING</b>
            </div>
            (in lieu Jul 2023) <br />
            <ul>
              <li style={{ listStyle: "square" }}>
                <b>Relevant Coursework:</b> Programming in java, Programming in
                Visual Basic, Introduction to Web Technology and Development,
                Software Security Engineering, Software Engineering Economics,
                Big Data Analysis, Programming in Python, Software Evolution and
                Maintenance, Hardware System Studies I and II.
              </li>
              <li style={{ listStyle: "square", marginTop: "10px" }}>
                <b>Extracurricular Activity:</b> Basketball Team
              </li>
            </ul>
          </div>
          <div className="First">
            <div className="content-title">
              <b>GRACE HIGH SCHOOL</b>
            </div>
            (2014 - 2019)
          </div>
        </div>
      </div>
    </div>
  );
};
