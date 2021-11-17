import React from "react";
import "./intro.styles.scss";
import face from "../../assets/pictures/face.jpg";

const Intro = () => (
  <section className="intro" id="intro">
    <div className="intro-text">
      <h1 className="intro-heading">
        Greetings, I'm<span className="hilight"> Eric</span>
      </h1>
      <h2 className="intro-subheading">
        A <span className="hilight"> front end </span>developer
      </h2>
    </div>
    <div className="intro-visual">
      <img src={face} alt="my face"></img>
    </div>
  </section>
);

export default Intro;