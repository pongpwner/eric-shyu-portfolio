import React from "react";
import "./contact.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";

const Contact = () => (
  <section className="contact">
    <h1>Contact Me</h1>
    <ul className="contact-list">
      <li>
        <a href="linkedin.com">
          <img src={linkedin} alt="linkedin icon"></img>
        </a>
      </li>

      <li>
        <a href="https://github.com/pongpwner">
          <img src={github} alt="github icon"></img>
        </a>
      </li>
    </ul>
    <div className="email">ericsshyus@gmail.com</div>
  </section>
);

export default Contact;
