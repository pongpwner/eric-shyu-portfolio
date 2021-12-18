import React, { useState } from "react";
import "./header.styles.scss";

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
            <a href="#intro">Home</a>
          </li>

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
      </nav>
    </header>
  );
};

export default Header;
