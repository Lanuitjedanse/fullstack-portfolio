import "./Projects.css";
import React from "react";
// import ReactDOM from "react-dom";
// import GifPlayer from "react-gif-player";
// import playButton from "./play-button.svg";

// import MyGifWrapper from "./MyGifWrapper";

// import GifPlayer from "./GifPlayer";
// import { useEffect, useState } from "react";

import { ReactComponent as Next } from "./next.svg";

// import { Link } from "react-router-dom";
export default function Projects() {
  // const [play, setPlay] = useState(false);
  // // const [buttonVisible, setButtonVisible] = useState(true);

  // // const pause = () => {
  // //     setPlay(!play);
  // // };
  // console.log("setPlay: ", setPlay);
  // const playOrPause = (e) => {
  //     setPlay(!play);
  // };
  const projects = [
    {
      id: 0,
      name: "Lanuitjedanse",
      description:
        "My final fullstack project during the bootcamp at Spiced Academy. Lanuitjedanse allows you to find a bar or a club depending on your music taste. This project was done in 1 week using Node.js, React and Postgres.",
      image: "/lanuitjedanse.gif",
      url: "https://lanuitjedanse.herokuapp.com/",
      urlBackground: "/background1.jpg",
      css: "color1",
      still: "/lanuitjedanse.png",
      position: "box-left",
    },
    {
      id: 1,
      name: "Tracklist",
      description:
        "My third fullstack project at Spiced Academy, this project was done in 2 weeks and half, using Node.js, React and Postgres. It is a social media platform for music lovers.",
      image: "/tracklist-social.gif",
      url: "https://social-tracklist.herokuapp.com/",
      urlBackground: "/background4.jpg",
      css: "color2",
      still: "/tracklist.png",
    },
    {
      id: 2,
      name: "Greenstagram",
      description:
        "My second fullstack project, this project was done in 1 week, using Node.js, Vue.js and Postgres. It is a social media platform similar to instagram for plant lovers",
      image: "/greenstagram.gif",
      url: "https://lucie-greenstagram.herokuapp.com/",
      urlBackground: "/background9.jpg",
      css: "color6",
      still: "/greenstagram.png",
      position: "box-left",
    },
    {
      id: 3,
      name: "Petition for Cheese Rights",
      description:
        "My first fullstack project at Spiced Academy. This project was done in 2 weeks using Node.js, Handlebars and Postgres. This is a petition website for cheese rights :) ",
      image: "/petition.gif",
      url: "https://stormy-chamber-44911.herokuapp.com/register",
      urlBackground: "/background3.jpg",
      css: "color3",
      still: "/petition.png",
      position: "box-right",
    },
    {
      id: 4,
      name: "Soundify",
      description:
        "Soundify is a platform to search for music on Spotify. JQuery and Spotify' API.",
      image: "/soundify.gif",
      url: "",
      urlBackground: "/background5.jpg",
      css: "color4",
      still: "/soundify.png",
      position: "box-left",
    },
    {
      id: 5,
      name: "Connect Four Special Ru Paul's Drag Race Edition",
      description: "Connect four project done with JQuery.",
      image: "/dragrace.gif",
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
