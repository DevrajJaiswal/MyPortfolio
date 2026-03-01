import React from 'react'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
    const projects = [
        {
            title: "Saison Components",
            description: "Corporate website developed to showcase electronic component distribution services across India. Focused on clean UI, SEO optimization, and structured content to improve brand visibility and lead generation.",
            previewImage: "/images/saison.png",
            url: "https://saisoncomponents.com"
        },
        {
            title: "Radicon Laboratories",
            description: "Professional business website designed for pharmaceutical and laboratory solutions company. Implemented responsive layout, optimized performance, and improved user navigation experience.",
            previewImage: "/images/radicon.png",
            url: "https://radiconlab.com"
        },
        {
            title: "Optimum EcoSolutions",
            description: "Sustainability-focused corporate website built with modern UI design. Enhanced digital presence with service-based structure and mobile-first responsiveness.",
            previewImage: "/images/Optimum ecosolutions.png",
            url: "https://optimumecosolutions.in"
        },
        {
            title: "Optimum Motors",
            description: "Business website developed for automotive division under Optimum Group. Designed product showcase layout and improved digital branding with structured information flow.",
            previewImage: "/images/Optimum motors.png",
            url: "https://optimumgroups.in"
        },
        {
            title: "News Portal",
            description: "Full-stack News Portal built using PHP, MySQL, HTML, CSS, and Bootstrap. Features include user authentication, News post management, News category filtering, and role-based access (Admin & Normal User).",
            previewImage: "/images/bg.jpg",
            url: "https://github.com/DevrajJaiswal/News-Portal"
        },
        {
            title: "Wroley E-Scooter",
            description: "Modern landing page created for electric scooter brand using responsive design principles. Focused on product highlighting, smooth animations, and optimized loading performance.",
            previewImage: "/images/Wroley e-scooter.png",
            url: "https://wroley-e-scooter.netlify.app"
        }
    ]
    return (
        <>
            <section id="projects">
                <div className="container">
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Projects
                    </h2>
                    <div className="project-list">
                        {
                            projects.map((project, index) =>
                                <ProjectCard key={index} project={project} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects

export { Projects }