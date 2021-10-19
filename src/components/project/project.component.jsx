import React from "react";
import "./project.styles.scss";
import github from "../../assets/pictures/github-icon.svg";

const Project = ({ name, description, githubLink, link }) => (
  <div className="project">
    <img src={link}></img>
    <div>{name}</div>
    <p>{description}</p>
    <ul className="links">
      <li>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <img className="github-icon" src={github} alt="github"></img>
        </a>
      </li>
      <li>live website link</li>
    </ul>
  </div>
);

export default Project;
