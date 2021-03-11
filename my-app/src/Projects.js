import "./Projects.css";
import next from "./next.svg";
// import { Link } from "react-router-dom";
export default function Projects() {
    const projects = [
        {
            id: 0,
            name: "Lanuitjedanse",
            description: "This is just a quick description",
            image: "/lanuitjedanse.png",
            url: "https://lanuitjedanse.herokuapp.com/",
            urlBackground:
                "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",
        },
        {
            id: 1,
            name: "Tracklist",
            description: "This is just a quick description",
            image: "/tracklist.png",
            url: "https://social-tracklist.herokuapp.com/",
            urlBackground:
                "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80",
        },
        {
            id: 2,
            name: "Petition for Cheese Rights",
            description: "This is just a quick description",
            image: "/petition.png",
            url: "https://stormy-chamber-44911.herokuapp.com/register",
            urlBackground:
                "https://images.unsplash.com/photo-1525956058128-f1ab919ba1a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
    ];

    const openLink = (link, index) => {
        window.open(link[index].url);
    };
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
                                <p>{project.description}</p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={next}
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
