import React from "react";
import "./projects.styles.scss";
import Project from "../project/project.component";
import onlineGarageSale from "../../assets/pictures/online-garage-sale.png";
import genshinCompanion from "../../assets/pictures/genshin-companion.png";
const projects = [
  {
    name: "Online Garage Sale",
    github: "https://github.com/pongpwner/online-garage-sale",
    description: "ecommerce website",
    link: onlineGarageSale,
    live: "https://pong-online-garage-sale.herokuapp.com/",
    id: 1,
  },
  {
    name: "Genshin Impact Companion",
    github: "https://github.com/pongpwner/genshin-calculator",
    description: "companion web app for the game Genshin Impact",
    link: genshinCompanion,
    live: "https://genshin-impact-companion.herokuapp.com/",
    id: 2,
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h1>Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          githubLink={project.github}
          link={project.link}
          live={project.live}
        />
      ))}
    </div>
  </section>
);

export default Projects;
