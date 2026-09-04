import React from 'react'

function ProjectCard({ project }) {
    return (
        <article className="project" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="200">
            <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-contribution">{project.contribution}</p>

                <ul className="skill-tags project-tags" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>

            {project.links.length > 0 && (
                <div className="project-links">
                    {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                            <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                        </a>
                    ))}
                </div>
            )}
        </article>
    )
}

export default ProjectCard
