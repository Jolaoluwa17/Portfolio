import React from "react";
import "./contactMe.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  style={{ width: "48%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style={{ width: "48%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "4%" }}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  style={{ width: "100%", marginTop: "4%" }}
                />
              </div>
            </Box>
            <div className="send-btn">
              <button>Send Message</button>
            </div>
          </div>
        </div>
        <div className="right-navigation">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2sphase%202%2C%2024%20Lanre%20Awolokun%20St%2C%20Somolu%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1682840348211!5m2!1sen!2sng"
            width="100%"
            height="99.5%"
            title="showing google map"
            style={{ border: "none" }}
          ></iframe> */}
          <div className="illustration-2">
            <img
              src="https://res.cloudinary.com/dneawlwcp/image/upload/v1685622473/Portfolio/illustrations/4111242_1_snfz7n.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
