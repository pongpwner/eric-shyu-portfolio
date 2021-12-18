(this["webpackJsonperic-shyu-portfolio"]=this["webpackJsonperic-shyu-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),s=t(3),r=t.n(s),a=(t(9),t(10),t(4)),l=(t(11),t(0)),o=function(){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),t=n[0],c=n[1];return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"burger",onClick:function(){c(!t)},children:[Object(l.jsx)("div",{className:"burger-line"}),Object(l.jsx)("div",{className:"burger-line"}),Object(l.jsx)("div",{className:"burger-line"})]}),Object(l.jsxs)("ul",{className:"list-container ".concat(t?"dflex":"dnone"),children:[Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#skills",children:"Skills"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#projects",children:"Projects"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#about",children:"About"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contact"})})]})]})})},j=(t(13),t(14),t(15),t.p+"static/media/github-icon.41bba81c.svg"),d=function(e){var n=e.name,t=e.description,i=e.githubLink,c=e.link,s=e.live;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("div",{className:"title",children:n}),Object(l.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"link-container",children:Object(l.jsx)("img",{className:"project-image",src:c,alt:"project preview"})}),Object(l.jsxs)("div",{className:"group1",children:[Object(l.jsx)("p",{children:t}),Object(l.jsxs)("ul",{className:"links",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"github-icon",src:j,alt:"github"})})}),s?Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"live"})}):null]})]})]})},h=[{name:"Online Garage Sale",github:"https://github.com/pongpwner/online-garage-sale",description:"ecommerce website",link:t.p+"static/media/online-garage-sale.753727e9.png",live:"https://pong-online-garage-sale.herokuapp.com/",id:1},{name:"Genshin Impact Companion",github:"https://github.com/pongpwner/genshin-calculator",description:"companion web app for the game Genshin Impact",link:t.p+"static/media/genshin-companion.84906cc6.png",live:"https://genshin-impact-companion.herokuapp.com/",id:2}],u=function(){return Object(l.jsxs)("section",{className:"projects",id:"projects",children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)("div",{className:"project-list",children:h.map((function(e){return Object(l.jsx)(d,{name:e.name,description:e.description,githubLink:e.github,link:e.link,live:e.live},e.id)}))}),Object(l.jsx)("div",{className:"link-container",children:Object(l.jsx)("a",{className:"front-end-mentor-link",href:"https://www.frontendmentor.io/profile/pongpwner",target:"_blank",rel:"noreferrer",children:"front end mentor coding challenge solutions"})})]})},b=(t(16),function(){return Object(l.jsxs)("section",{className:"about",id:"about",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("p",{children:"My name is Eric Shyu, 23 years old, and I am from North Carolina. I am a front end developer with a computer science degree from UNC Chapel Hill. Since graduation I have been working on various projects and taking online courses to gain experience and further my knowledge on front end development. You can find some of the projects I have been working on in the \u201cProjects\u201d section. Currently, I am seeking a role as a front end developer."}),Object(l.jsx)("p",{children:"I grew up using the internet and I have enjoyed seeing the ui/ux of websites I use evolve. I can certainly remember experiences where navigating a website was counterintuitive. I love the internet and I want to contribute to it by creating beautiful websites with a great user experience."}),Object(l.jsx)("p",{children:"I am just starting out my career, and I am excited to learn more and to see what the future holds."})]})}),m=(t(17),t(18),function(e){var n=e.name,t=e.url;return Object(l.jsxs)("div",{className:"skill",children:[Object(l.jsx)("img",{className:"skill-logo",src:t,alt:n}),Object(l.jsx)("div",{className:"name",children:n})]})}),g=t.p+"static/media/css-3.92661138.svg",p=t.p+"static/media/html-5.04ad4ab8.svg",x=t.p+"static/media/javascript.1d3d2879.svg",O=t.p+"static/media/react.19465659.svg",f=t.p+"static/media/sass.3572f53e.svg",v=t.p+"static/media/git-icon.8497c3c4.svg",k=[{name:"css",url:g,id:0},{name:"html",url:p,id:1},{name:"javascript",url:x,id:2},{name:"react",url:O,id:3},{name:"redux",url:t.p+"static/media/redux.546485b8.svg",id:6},{name:"redux-sagas",url:t.p+"static/media/redux-saga.b2d1d0d3.svg",id:7},{name:"sass",url:f,id:4},{name:"git",url:v,id:5}],N=function(){return Object(l.jsxs)("div",{className:"skills",id:"skills",children:[Object(l.jsx)("h1",{children:"Skills"}),Object(l.jsx)("div",{className:"skills-container",children:k.map((function(e){return Object(l.jsx)(m,{name:e.name,url:e.url},e.id)}))})]})},w=(t(19),t.p+"static/media/linkedin-icon.a664ab45.svg"),I=function(){return Object(l.jsxs)("section",{className:"contact",id:"contact",children:[Object(l.jsx)("h1",{children:"Contact Me"}),Object(l.jsxs)("ul",{className:"contact-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/eric-shyu-105a84191/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"linkedin-icon",src:w,alt:"linkedin icon"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/pongpwner",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"github-icon",src:j,alt:"github icon"})})})]}),Object(l.jsx)("a",{className:"email",href:"mailto: ericsshyus@gmail.com",children:"ericsshyus@gmail.com"})]})},y=(t(20),t.p+"static/media/face.ef6cb928.jpg"),C=function(){return Object(l.jsxs)("section",{className:"intro",id:"intro",children:[Object(l.jsxs)("div",{className:"intro-text",children:[Object(l.jsxs)("h1",{className:"intro-heading",children:["Greetings, I'm",Object(l.jsx)("span",{className:"hilight",children:" Eric"})]}),Object(l.jsxs)("h2",{className:"intro-subheading",children:["A ",Object(l.jsx)("span",{className:"hilight",children:" front end "}),"developer"]})]}),Object(l.jsx)("div",{className:"intro-visual",children:Object(l.jsx)("img",{src:y,alt:"my face"})})]})},S=function(){return Object(l.jsxs)("main",{className:"home-page",children:[Object(l.jsx)(C,{}),Object(l.jsx)(N,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{}),Object(l.jsx)(I,{})]})};var _=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(S,{})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),P()}],[[21,1,2]]]);
//# sourceMappingURL=main.eba3dc59.chunk.js.map