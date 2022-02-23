import React from "react";
import "./contact.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";
import email from "../../assets/pictures/email.png";
import resume from "../../assets/pictures/resume.png";

const Contact = () => (
  <section className="contact" id="contact">
    <h1>Contact / Links</h1>
    <ul className="contact-list">
      <li>
        <a
          href="https://www.linkedin.com/in/eric-shyu-105a84191/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="linkedin-icon"
            src={linkedin}
            alt="linkedin icon"
          ></img>
        </a>
      </li>

      <li>
        <a href="https://github.com/pongpwner" target="_blank" rel="noreferrer">
          <img className="github-icon" src={github} alt="github icon"></img>
        </a>
      </li>
      <li>
        <a className="email" href="mailto: ericshyu98@gmail.com">
          <img className="icon" alt="email" src={email}></img>
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
