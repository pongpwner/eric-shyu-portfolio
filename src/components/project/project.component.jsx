import React from "react";
import "./project.styles.scss";
import github from "../../assets/pictures/github-icon.svg";

const Project = ({ name, description, githubLink, link, live }) => (
  <div className="project">
    <div className="title">{name}</div>
    <a href={live} target="_blank" rel="noreferrer" className="link-container">
      <img className="project-image" src={link} alt="project preview"></img>
    </a>

    <p>{description}</p>
    <ul className="links">
      <li>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <img className="github-icon" src={github} alt="github"></img>
        </a>
      </li>
      {live ? (
        <li>
          <a href={live} target="_blank" rel="noreferrer">
            live
          </a>
        </li>
      ) : null}
    </ul>
  </div>
);

export default Project;
