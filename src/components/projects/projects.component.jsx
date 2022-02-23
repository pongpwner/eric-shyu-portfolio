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
        This is a practice ecommerce website. The goal is to create a site for
        myself to sell personal items. I got a lot of practice building resuable
        components with React. I used SCSS to make styling components easier. I
        use redux to store the cart, user data, and shop data. Using redux
        allows these states to be accessible in any component. I learned a lot
        about sagas building this project. I learned about the factory functin
        and how it yields. Sagas is very useful for calling different
        combinations of actions. One example of this is dispatching the
        userSignIn action in a saga after the userSignUp action is dispatched. I
        learned how to authenticate users with firebase, and how to store data
        in firestore. I used the stripe payments api to build the ui for the
        payments section. Still need to add backend to accept payments.
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
        About: It is a tool to be used for the game Genshin Impact. It
        calcualtes how much materials the player needs to reach their goals. How
        to use: Calculators: Select what you want to calculate on the header.
        Then enter the materials you have for the calculator. The input is
        colorcoded based on the rarity of the material. You do not have to fill
        in every field, just the ones you are interested in. Then hit the submit
        button when you are done. On the right there is a section that tells you
        what you need. The calculator converts any extra material you have to
        the next level of rarity. It will tell you what you still need, and how
        much of each material you have left if you were to convert them all.
        What I learned: Calculators This is my first project I created using
        react class componentes and redux. The Weapon component is a class
        component where the state is stored in the component. The Character and
        Talent have their state stored in their respective reducers. The I also
        used the reselect library for selectors to use in mapStateToProps. I
        learned to use a folder structure with components, pages, redux, and
        images all having their own folder. Each component has its own folder
        with a stylesheet to go with it. I also learned how to use react-router
        to link to different pages on my app.",111 This is an app that makes
        common calculations in Genshin Impact very convenient.
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
