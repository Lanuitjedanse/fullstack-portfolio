import "./Projects.css";
import React from "react";

import { ReactComponent as Next } from "./next.svg";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "thing Online",
      description:
        "My first profesionnal project working as a Frontend Developer. thing Online aims to revolutionise virtual workshops. This project uses stack such as Node.js, Nuxt.js, Vue.js, Vuex, socket.io, JavaScript, TypeScript, Python, MongoDB, LiveSwitch, PixiJS, and more",
      url: "https://app.thing.online/login",
      urlBackground: "/background7.jpg",
      css: "color9",
      still: "/thing-online.png",
      position: "box-right",
    },
    {
      id: 1,
      name: "Lanuitjedanse",
      description:
        "My final fullstack project during the bootcamp at Spiced Academy. Lanuitjedanse allows you to find a bar or a club depending on your music taste. This project was done using Node.js, React, PostgresSQL and Google Maps API.",
      url: "https://lanuitjedanse.herokuapp.com/",
      urlBackground: "/background1.jpg",
      css: "color1",
      still: "/lanuitjedanse.png",
      position: "box-left",
    },
    {
      id: 2,
      name: "Tracklist",
      description:
        "My third fullstack project at Spiced Academy using Node.js, React and Postgres. It is a social media platform for music lovers.",
      url: "https://social-tracklist.herokuapp.com/",
      urlBackground: "/background4.jpg",
      css: "color2",
      still: "/tracklist.png",
    },
    {
      id: 3,
      name: "Greenstagram",
      description:
        "My second fullstack project, this project was done using Node.js, Vue.js and Postgres. It is a social media platform similar to instagram for plant lovers",
      url: "https://lucie-greenstagram.herokuapp.com/",
      urlBackground: "/background9.jpg",
      css: "color6",
      still: "/greenstagram.png",
      position: "box-left",
    },
    {
      id: 4,
      name: "Petition for Cheese Rights",
      description:
        "My first fullstack project at Spiced Academy. This project was done using Node.js, Handlebars and Postgres. This is a petition website for cheese rights :) ",
      url: "https://stormy-chamber-44911.herokuapp.com/register",
      urlBackground: "/background3.jpg",
      css: "color3",
      still: "/petition.png",
      position: "box-right",
    },
    {
      id: 5,
      name: "Soundify",
      description:
        "Soundify is a platform to search for music on Spotify. JQuery and Spotify' API.",
      url: "",
      urlBackground: "/background5.jpg",
      css: "color4",
      still: "/soundify.png",
      position: "box-left",
    },
    {
      id: 6,
      name: "Connect Four Special Ru Paul's Drag Race Edition",
      description: "Connect four project done with JQuery.",
      url: "",
      urlBackground: "/background6.jpg",
      css: "color5",
      still: "/dragrace.png",
      position: "box-right",
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
