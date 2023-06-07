import "./Projects.css";
import React from "react";

import { ReactComponent as Next } from "./chevron-circle-right-solid.svg";
import { ReactComponent as GitHubIcon } from "./github-brands.svg";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "Spin Spin Shop",
      description: "Helped to change CSS for this Shopify Shop",
      url: "https://spinspinshop.com/",
      urlBackground:
        "https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      css: "color10",
      still: "/spinspin.png",
      position: "box-left",
      gitHub: "",
    },
    {
      id: 1,
      name: "thing Online",
      description:
        "My first profesionnal project working as a Frontend Developer. thing Online aims to revolutionise virtual workshops. This project uses stack such as Node.js, Nuxt.js, Vue.js, Vuex, socket.io, JavaScript, TypeScript, Python, MongoDB, LiveSwitch, PixiJS, and more",
      url: "https://app.thing.online/login",
      urlBackground:
        "https://images.unsplash.com/photo-1564319973332-97fa28e83d7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
      css: "color9",
      still: "/thing-online.png",
      position: "box-right",
      gitHub: "",
    },
    {
      id: 2,
      name: "Lanuitjedanse",
      description:
        "My final fullstack project during the bootcamp at Spiced Academy. Lanuitjedanse allows you to find a bar or a club depending on your music taste. This project was done using Node.js, React, PostgresSQL and Google Maps API.",
      url: "",
      urlBackground:
        "https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      css: "color1",
      still: "/lanuitjedanse.png",
      position: "box-left",
      gitHub: "https://github.com/Lanuitjedanse/Lanuitjedanse",
    },
    {
      id: 3,
      name: "Tracklist",
      description:
        "My third fullstack project at Spiced Academy using Node.js, React and Postgres. It is a social media platform for music lovers.",
      url: "",
      urlBackground:
        "https://images.unsplash.com/photo-1567675988757-5d73c37f2490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      css: "color2",
      still: "/tracklist.png",
      gitHub: "https://github.com/Lanuitjedanse/tracklist",
    },
    {
      id: 4,
      name: "Greenstagram",
      description:
        "My second fullstack project, this project was done using Node.js, Vue.js and Postgres. It is a social media platform similar to instagram for plant lovers",
      url: "",
      urlBackground:
        "https://images.unsplash.com/photo-1565626420105-deceab597aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      css: "color6",
      still: "/greenstagram.png",
      position: "box-left",
      gitHub: "https://github.com/Lanuitjedanse/greenstagram",
    },
    {
      id: 5,
      name: "Petition for Cheese Rights",
      description:
        "My first fullstack project at Spiced Academy. This project was done using Node.js, Handlebars and Postgres. This is a petition website for cheese rights :) ",
      url: "",
      urlBackground:
        "https://images.unsplash.com/photo-1573012678310-a451f9841bb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1926&q=80",
      css: "color3",
      still: "/petition.png",
      position: "box-right",
      gitHub: "https://github.com/Lanuitjedanse/petition-for-cheese-rights",
    },
    {
      id: 6,
      name: "Soundify",
      description:
        "Soundify is a platform to search for music on Spotify. JQuery and Spotify' API.",
      url: "",
      css: "color4",
      urlBackground:
        "https://images.unsplash.com/photo-1484597353563-eda230e1a15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
      still: "/soundify.png",
      position: "box-left",
      gitHub: "https://github.com/Lanuitjedanse/soundify",
    },
    {
      id: 7,
      name: "Connect Four Special Ru Paul's Drag Race Edition",
      description: "Connect four project done with JQuery.",
      url: "",
      urlBackground:
        "https://images.unsplash.com/photo-1558101087-4128e40ab22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      css: "color5",
      still: "/dragrace.png",
      position: "box-right",
      gitHub: "https://github.com/Lanuitjedanse/connect-four-drag-race",
    },
  ];

  return (
    <>
      {projects &&
        projects.map((project, index) => (
          <div className="no-margin" key={project.id}>
            <div className="box-project">
              <div className="box-left">
                <img
                  src={project.still}
                  alt={project.name}
                  className="gif_player"
                />
              </div>
              <div className={`box-right ${project.css}`}>
                <h2>{project.name}</h2>
                <p className="description">{project.description}</p>

                {project.url !== "" && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <Next
                      alt="go icon"
                      className={`project-icon rotate-center ${project.css}`}
                    />
                  </a>
                )}
                {project.gitHub && (
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    <GitHubIcon
                      alt="githubicon"
                      className={`project-icon rotate-center ${project.css}`}
                    />
                  </a>
                )}
              </div>
            </div>
            <img
              className="banner"
              src={project.urlBackground}
              alt="background images"
            />
          </div>
        ))}
    </>
  );
}
