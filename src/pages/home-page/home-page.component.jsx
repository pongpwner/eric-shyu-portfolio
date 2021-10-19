import React from "react";
import "./home-page.styles.scss";
import Projects from "../../components/projects/projects.component";
import About from "../../components/about/about.component";
import Skills from "../../components/skills/skills.component";
import Contact from "../../components/contact/contact.component";
const HomePage = () => (
  <div className="HomePage">
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default HomePage;
