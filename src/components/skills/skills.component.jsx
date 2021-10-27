import React from "react";
import "./skills.styles.scss";
import Skill from "../skill/skill.component";
import css from "../../assets/pictures/css-3.svg";
import html from "../../assets/pictures/html-5.svg";
import javascript from "../../assets/pictures/javascript.svg";
import react from "../../assets/pictures/react.svg";
import sass from "../../assets/pictures/sass.svg";
import git from "../../assets/pictures/git-icon.svg";
import redux from "../../assets/pictures/redux.svg";
import reduxSaga from "../../assets/pictures/redux-saga.svg";

const skills = [
  { name: "css", url: css, id: 0 },
  { name: "html", url: html, id: 1 },
  { name: "javascript", url: javascript, id: 2 },
  { name: "react", url: react, id: 3 },
  { name: "redux", url: redux, id: 6 },
  { name: "redux-sagas", url: reduxSaga, id: 7 },
  { name: "sass", url: sass, id: 4 },
  { name: "git", url: git, id: 5 },
];
const Skills = () => (
  <div className="skills" id="skills">
    <h1>Skills</h1>
    <div className="skills-container">
      {skills.map((skill) => (
        <Skill key={skill.id} name={skill.name} url={skill.url}></Skill>
      ))}
    </div>
  </div>
);

export default Skills;
