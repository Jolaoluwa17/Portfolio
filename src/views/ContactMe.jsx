import React from "react";
import "./contactMe.css"

export const ContactMe = ({ handleClick, isOn }) => {
  return (
    <div className={`contact-me ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className="contact-container">
        <div className="left-navigation">
          <div className="contact-me-title">
            <h1 className={`${isOn ? "dark-mode" : "light-mode"}`}>
              CONTACT ME
            </h1>
          </div>
          <div className="contact-me-title">
            <p>
              I'm interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to use the form.
            </p>
            <div className="form">
              <div className="form-item" style={{ width: "45%" }}>
                <input type="text" placeholder="Name" />
                <span className="focus-border"></span>
              </div>
              <div className="form-item" style={{ width: "45%" }}>
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Subject"
                />
              </div>
              <div className="form-item">
                <textarea
                  name=""
                  id=""
                  style={{ width: "103%", height: "150px", resize: "none" }}
                ></textarea>
              </div>
            </div>
            <div className="send-btn">
              <button>Send Message</button>
            </div>
          </div>
        </div>
        <div className="right-navigation">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2sphase%202%2C%2024%20Lanre%20Awolokun%20St%2C%20Somolu%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1682840348211!5m2!1sen!2sng"
            width="100%"
            height="99.5%"
            title="showing google map"
            style={{border: "none"}}
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};
