import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    return (
        <>
            <div className="project" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="200">
                <img src={project.previewImage} alt="" />
                <div className="layer">
                    <h3>{project.title}</h3>
                    <div className="para">
                        <p>{project.description}</p>
                    </div>
                    <Link to={project.url} target="_blank"><i className="fa-solid fa-up-right-from-square"></i></Link>
                </div>
            </div>
        </>
    )
}

export default ProjectCard