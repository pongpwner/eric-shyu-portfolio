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
          to store the cart, user data, and shop data. Using redux allows these
          states to be accessible in any component. I learned a lot about sagas
          building this project. I learned about the factory function and how it
          yields. Sagas is very useful for calling different combinations of
          actions. One example of this is dispatching the userSignIn action in a
          saga after the userSignUp action is dispatched. I learned how to
          authenticate users with firebase, and how to store data in firestore.
          I used the stripe payments api to build the ui for the payments
          section. Still need to add backend to accept payments.
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
          components and redux. The Weapon component is a class component where
          the state is stored in the component. The Character and Talent have
          their state stored in their respective reducers. The I also used the
          reselect library for selectors to use in mapStateToProps. I learned to
          use a folder structure with components, pages, redux, and images all
          having their own folder. Each component has its own folder with a
          stylesheet to go with it. I also learned how to use react-router to
          link to different pages on my app. I later replaced the class
          components with functional components and using redux to store state.
          I also experimented with using hooks for certain components that did
          not need state used in other places.
        </p>
      </div>
    ),
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
