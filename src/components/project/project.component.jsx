import React, { useState } from "react";
import "./project.styles.scss";
import Modal from "../modal/modal.component";
import github from "../../assets/pictures/github-icon.svg";

const Project = ({
  name,
  description,
  githubLink,
  link,
  live,
  modalDescription,
  technologies,
}) => {
  const [active, setActive] = useState(false);
  function toggleModal() {
    setActive(!active);
  }

  return (
    <div className="project" onClick={toggleModal}>
      <Modal active={active} closeModal={toggleModal}>
        <h2 className="name"> {name}</h2>
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
        <img className="project-image" src={link} alt="project preview"></img>
        {modalDescription}
      </Modal>
      <div className="title">{name}</div>

      <img className="project-image" src={link} alt="project preview"></img>

      <div className="group1">
        <p>{description}</p>
        <div className="technologies">{technologies}</div>
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
    </div>
  );
};

export default Project;
