import "./Projects.css";
import React from "react";
import { ReactComponent as Next } from "./next.svg";
// import { Link } from "react-router-dom";
export default function Projects() {
    const projects = [
        {
            id: 0,
            name: "Lanuitjedanse",
            description:
                "My final fullstack project during the bootcamp at Spiced Academy. Lanuitjedanse allows you to find a bar or a club depending on your music taste. This project was done in 1 week using Node.js, React and Postgres.",
            image: "/lanuitjedanse.gif",
            url: "https://lanuitjedanse.herokuapp.com/",
            urlBackground:
                "https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            id: 1,
            name: "Tracklist",
            description:
                "My third fullstack project at Spiced Academy, this project was done in 2 weeks and half, using Node.js, React and Postgres. It is a social media platform for music lovers.",
            image: "/tracklist-social.gif",
            url: "https://social-tracklist.herokuapp.com/",
            urlBackground:
                "https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80",
        },
        {
            id: 2,
            name: "Petition for Cheese Rights",
            description:
                "My first fullstack project at Spiced Academy. This project was done in 2 weeks using Node.js, Handlebars and Postgres. This is a petition website for cheese rights :) ",
            image: "/petition.gif",
            url: "https://stormy-chamber-44911.herokuapp.com/register",
            urlBackground:
                "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2734&q=80",
        },
    ];

    return (
        <>
            {projects &&
                projects.map((project) => (
                    <div key={project.id}>
                        <div className="box-project">
                            <div className="box-left">
                                <img
                                    className="project-pic"
                                    src={project.image}
                                    alt={`screenshot of ${project.name}`}
                                />
                            </div>
                            <div className="box-right">
                                <h2>{project.name}</h2>
                                <p className="description">
                                    {project.description}
                                </p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Next
                                        alt="go icon"
                                        className="project-icon rotate-center"
                                    />
                                </a>
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
