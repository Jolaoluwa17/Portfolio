import React from "react";
import "./portfolioFS.css";
import { IoCallSharp, IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const PortfolioFS = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio-FS">
      <div className="portfolio-left">
        <div className="portfolio-left-title">
          <span className="back-btn" onClick={() => navigate("/")}>
            <BsFillArrowLeftCircleFill /> Back
          </span>
          <h1>OLUSANYA JOLAOLUWA OLUWAPELUMI</h1>
          <p>
            Experienced with various stages of the development cycle for dynamic
            web projects. Well versed in numerous programming languages
            including HTML5, CSS, JavaScript, ReactJS. Sound background in
            project management. Frequently praised as hard working by my peers,
            i can be relied upon to help your company achieve its goals
          </p>
        </div>
      </div>
      <div className="portfolio-middle">
        <div className="profile-picture">
          <img
            src="https://res.cloudinary.com/dneawlwcp/image/upload/v1685098771/Portfolio/ali-morshedlou-WMD64tMfc4k-unsplash_ymhcyc.jpg"
            alt=""
          />
          <h4>Olusanya Jolaoluwa</h4>
        </div>
      </div>
      <div className="portfolio-right">
        <h3>CONTACT ME</h3>
        <div className="contact">
          <div className="icon" style={{ fontSize: "18px" }}>
            <IoCallSharp />
          </div>
          <b>Phone:</b>
          <span>+234 8055668282</span>
        </div>
        <hr />
        <div className="contact">
          <div className="icon" style={{ fontSize: "18px" }}>
            <MdEmail />
          </div>
          <b>Email:</b>
          <span>olusanyajolaoluwa@gmail.com</span>
        </div>
        <hr />
        <div className="contact">
          <div className="icon" style={{ fontSize: "18px" }}>
            <IoHome />
          </div>
          <b>Address:</b>
          <span>
            No. 24 Lanre Awolokun, Gbagada Phase 2, Lagos State, Nigeria
          </span>
        </div>
      </div>
    </div>
  );
};
