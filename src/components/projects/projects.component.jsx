import React from "react";
import "./projects.styles.scss";
import Project from "../project/project.component";
import onlineGarageSale from "../../assets/pictures/online-garage-sale.png";

const projects = [
  {
    name: "online garage sale",
    github: "https://github.com/pongpwner/online-garage-sale",
    description: "ecommerce website",
    link: onlineGarageSale,
    live: "",
  },
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project) => (
        <Project
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
