import React from "react";
import "./projects.styles.scss";
import Project from "../project/project.component";
import onlineGarageSale from "../../assets/pictures/online-garage-sale.png";
import genshinCompanion from "../../assets/pictures/genshin-companion.png";
import pokedex from "../../assets/pictures/pokedex.png";
const projects = [
  {
    name: "Online Garage Sale",
    github: "https://github.com/pongpwner/online-garage-sale",
    description: "ecommerce website",
    link: onlineGarageSale,
    live: "https://pong-online-garage-sale.herokuapp.com/",
    id: 1,
    technologies:
      "javascript, react, redux, redux sagas, react-router, firebase, stripe payments",
    modalDescription: (
      <div className="description">
        <p>
          About: This is a practice ecommerce website. The goal is to create a
          site for myself to sell items. For now it is only a practice project,
          but maybe one day if I want to sell things I can use it for real.
        </p>
        <p>
          What I learned: I got a lot of practice building resuable components
          with React. I used SCSS to make styling components easier. I use redux
          to store the state of the cart, user data, and shop data. Using redux
          allows these states to be accessible in any component. I also used
          sagas along with redux to build this project. Sagas is very powerful
          and makes code easy to test with the help of redux logger keeping
          track of the state step by step. Sagas is very useful for calling
          different combinations of actions. One example of this is in my
          project is dispatching the userSignIn action in a saga after the
          userSignUp action is dispatched. I learned how to authenticate users
          with firebase, and how to store data in firestore. I used the stripe
          payments api to build the ui for the payments section. Still need to
          add backend to accept payments.
        </p>
      </div>
    ),
  },

  {
    name: "Genshin Impact Companion",
    github: "https://github.com/pongpwner/genshin-calculator",
    description: "companion web app for the game Genshin Impact",
    link: genshinCompanion,
    live: "https://genshin-impact-companion.herokuapp.com/",
    id: 2,

    technologies:
      "javascript, react, react-router, redux, redux-thunk, genshindev api",
    modalDescription: (
      <div className="description">
        <p>
          About: This is an app that makes common calculations in Genshin Impact
          very convenient. The input is color coded based on the rarity of the
          material. You do not have to fill in every field, just the ones you
          are interested in. Then the app will make the calculations for you.
        </p>
        <p>
          What I learned: This is my first project I created using react class
          components. I later refactored it into storing the state with redux.
          The I used the reselect library to create selectors to grab pieces of
          state to use in mapStateToProps. I learned to use a scalable folder
          structure with components, pages, redux, and images all having their
          own folder. Each component has its own folder with a stylesheet to go
          with it. I used react react-router to link to different pages on my
          app. I used hooks for certain components that did not need their state
          used in other places. I used redux-thunk to handle api calls to the
          genshin dev api. I experimented with jest to test my calculation
          functions.
        </p>
      </div>
    ),
  },
  {
    name: "Pokedex",
    github: "https://github.com/pongpwner/pokedex",
    description: "See all Pokemon and their information",
    link: pokedex,
    live: "https://pongpwner.github.io/pokedex/",
    id: 3,
    technologies: "javascript, react, pokeapi",
    modalDescription: (
      <div className="description">
        <p>
          About: Displays all pokemon with their information. The info cards
          flip over when you hover on them. The info cards open a modal with
          more additional information when clicked on.
        </p>
        <p>
          What I learned: I got practice with css animations by making the cards
          flip. I got practice using async functions from making api calls to
          the pokeapi.
        </p>
      </div>
    ),
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <h1 className="heading1 u-margin-top-small">Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          githubLink={project.github}
          link={project.link}
          live={project.live}
          modalDescription={project.modalDescription}
          technologies={project.technologies}
        />
      ))}
    </div>
    <div className="link-container">
      <a
        className="front-end-mentor-link"
        href="https://www.frontendmentor.io/profile/pongpwner"
        target="_blank"
        rel="noreferrer"
      >
        front end mentor coding challenge solutions
      </a>
    </div>
  </section>
);

export default Projects;
