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
import express from "../../assets/pictures/express.svg";
import mongodb from "../../assets/pictures/mongodb.svg";
import nodejs from "../../assets/pictures/nodejs-icon.svg";
import typescript from "../../assets/pictures/typescript-icon.svg";

const skills = [
  { name: "css", url: css, id: 0 },
  { name: "html", url: html, id: 1 },
  { name: "javascript", url: javascript, id: 2 },
  { name: "react", url: react, id: 3 },
  { name: "redux", url: redux, id: 6 },
  { name: "redux-sagas", url: reduxSaga, id: 7 },
  { name: "sass", url: sass, id: 4 },
  { name: "git", url: git, id: 5 },
  { name: "express", url: express, id: 6 },
  { name: "nodejs", url: nodejs, id: 7 },
  { name: "mongodb", url: mongodb, id: 8 },
  { name: "typescript", url: typescript, id: 9 },
];
const Skills = () => (
  <section className="skills" id="skills">
    <h1 className="heading1 u-margin-top-small">Skills</h1>
    <div className="skills-container">
      {skills.map((skill) => (
        <Skill key={skill.id} name={skill.name} url={skill.url}></Skill>
      ))}
    </div>
  </section>
);

export default Skills;
