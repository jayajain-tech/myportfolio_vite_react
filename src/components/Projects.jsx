/** <!--
  Projects Section:
  Contains a slider to showcase projects.
  Navigation buttons allow moving between projects.
  Project content is injected dynamically via JavaScript.
-->
*/
import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
const projects = [
    {
        title: "Inventory Management System",
        description: "A web app for tracking inventory in real-time.",
        tech: ["JavaScript", "Spring Boot", "SQL"],
        image: project1,
        repo: "https://github.com/yourusername/inventory-system",
        live: "https://inventory.example.com"
    },
    {
        title: "Chat Application",
        description: "A real-time chat app with group messaging.",
        tech: ["JavaScript", "WebSocket", "Docker"],
        image: project2,
        repo: "https://github.com/yourusername/chat-app",
        live: "https://chat.example.com"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio to showcase projects and skills.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: project3,
        repo: "https://github.com/yourusername/portfolio",
        live: "https://yourportfolio.example.com"
    }
];

export default function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const project = projects[currentProject];
    return (
        <>
            <section className="project-slider container">
                <h3 className="project-slider__title">Projects</h3>
                <div className="project-slider__wrapper">
                    <button
                        className="project-slider__prev"
                        onClick={() =>
                            setCurrentProject((currentProject - 1 + projects.length) % projects.length)
                        }
                        aria-label="Previous Project"
                    >
                        &#60;
                    </button>
                    <div className="project-slider__content">
                        <div className="project-card">
                            <img
                                src={project.image}
                                alt={project.title + " screenshot"}
                                className="project-card__image"
                                loading="lazy"
                            />
                            <h4 className="project-card__title">{project.title}</h4>
                            <p className="project-card__desc">{project.description}</p>
                            <ul className="project-card__tech">
                                {project.tech.map(t => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                            <div className="project-card__links">
                                <a href={project.repo} target="_blank" rel="noopener">
                                    Repo
                                </a>
                                <a href={project.live} target="_blank" rel="noopener">
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                    <button
                        className="project-slider__next"
                        onClick={() =>
                            setCurrentProject((currentProject + 1) % projects.length)
                        }
                        aria-label="Next Project"
                    >
                        &#62;
                    </button>
                </div>
            </section>
        </>
    );
}
