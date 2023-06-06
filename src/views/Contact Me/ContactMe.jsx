import React from "react";
import "./contactMe.css";
import { useState, useRef } from "react";
import { GiCancel } from "react-icons/gi";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Icons } from "../../components/Icons/Icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const ContactMe = ({ handleClick, isOn }) => {
  const formRef = useRef(null); // Create a ref for the form element
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [dataAOSValue, setDataAOSValue] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_y3fcjr7",
        "template_mzrvkni",
        formRef.current,
        "A7u0Crj33k1DwdwQq"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Email sent successfully
          console.log("message sent");
          setFormSubmitted(true);
          // Clear the success message after 5 seconds
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          // Email sending failed
          console.log("There was a problem");
        }
      );

    // Reset form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color: "black",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
            },
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            backgroundColor: "black",
          },
        },
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <div className={`contact-root ${isOn ? "dark-mode" : "light-mode"}`}>
      <div className={`contact-me ${isOn ? "dark-mode" : "light-mode"}`}>
        <Icons isOn={isOn} />
        <div className="contact-container">
          <div className="left-navigation">
            <div className="contact-me-title">
              <h1 className={`${isOn ? "dark-mode" : "light-mode"}`}>
                CONTACT ME &#128071;&#127997;
              </h1>
            </div>
            <div className="contact-me-title">
              <p>
                I'm interested in freelance opportunities - especially ambitious
                or large projects. However, if you have other request or
                question, don't hesitate to use the form.
              </p>
              <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  ref={formRef} // Set the ref on the form element
                >
                  <div className="form">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      style={{ width: "48%" }}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      style={{ width: "48%" }}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Subject"
                      variant="outlined"
                      style={{ width: "100%", marginTop: "4%" }}
                      value={formData.subject}
                      onChange={handleChange}
                      name="subject"
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      style={{ width: "100%", marginTop: "4%" }}
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    />
                    <div className="send-btn">
                      <button
                        type="submit"
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Box>
              </ThemeProvider>
            </div>
          </div>
          <div className="right-navigation">
            <div className="illustration-2">
              {formSubmitted && (
                <div className="successfull-box" data-aos="fade-left">
                  <p> &#9989; Message Sent &#128076;&#127997;</p>
                  <GiCancel />
                </div>
              )}
              <img
                src="https://res.cloudinary.com/dneawlwcp/image/upload/v1685622473/Portfolio/illustrations/4111242_1_snfz7n.png"
                alt=""
              />
              {/* <iframe
              src="https://embed.lottiefiles.com/animation/94599"
              style={{ width: "500px", height: "500px", border: "none" }}
              title="ContactMe"
            ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
