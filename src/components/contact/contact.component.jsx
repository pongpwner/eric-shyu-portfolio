import React from "react";
import "./contact.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";

const Contact = () => (
  <section className="contact" id="contact">
    <h1>Contact Me</h1>
    <ul className="contact-list">
      <li>
        <a
          href="https://www.linkedin.com/in/eric-shyu-105a84191/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin icon"></img>
        </a>
      </li>

      <li>
        <a href="https://github.com/pongpwner" target="_blank" rel="noreferrer">
          <img src={github} alt="github icon"></img>
        </a>
      </li>
    </ul>
    <a className="email" href="mailto: ericsshyus@gmail.com">
      ericsshyus@gmail.com
    </a>
  </section>
);

export default Contact;
