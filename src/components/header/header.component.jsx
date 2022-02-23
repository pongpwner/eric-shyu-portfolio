import React, { useState } from "react";
import "./header.styles.scss";
import linkedin from "../../assets/pictures/linkedin-icon.svg";
import github from "../../assets/pictures/github-icon.svg";
import email from "../../assets/pictures/email.png";
import resume from "../../assets/pictures/resume.png";
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <header className="header">
      <nav>
        <div className="burger" onClick={toggleNavbar}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <ul className={`list-container ${navbar ? "dflex" : "dnone"}`}>
          <li onClick={() => setNavbar(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setNavbar(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className={`contact-container ${navbar ? "" : "dnone"}`}>
          <li>
            <a
              href="https://www.linkedin.com/in/eric-shyu-105a84191/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-icon icon"
                src={linkedin}
                alt="linkedin icon"
              ></img>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/pongpwner"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-icon icon"
                src={github}
                alt="github icon"
              ></img>
            </a>
          </li>
          <li>
            <a className="email" href="mailto: ericshyu98@gmail.com">
              <img className="icon" alt="email" src={email}></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
