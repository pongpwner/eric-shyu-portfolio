import React, { useState } from "react";
import "./header.styles.scss";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <header className="header">
      <div className="burger" onClick={toggleNavbar}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ul className={`list-container ${navbar ? "dflex" : "dnone"}`}>
        <li onClick={() => setNavbar(false)}>About</li>
        <li onClick={() => setNavbar(false)}>Skills</li>
        <li onClick={() => setNavbar(false)}>Projects</li>
        <li onClick={() => setNavbar(false)}>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
