import React from 'react'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
    const projects = [
        {
            title: 'Laravel CRM',
            type: 'Full-stack project',
            description: 'A modular API-first CRM with lead, customer, contact, support ticket, activity, notification, and reporting modules.',
            contribution: 'Built the application structure with role-based access control, permissions, reusable components, data transfer patterns, and service-layer architecture.',
            tags: ['Laravel', 'React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'MySQL'],
            links: [
                {
                    label: 'GitHub',
                    url: 'https://github.com/DevrajJaiswal/laravel-crm',
                },
            ],
        },
        {
            title: 'UnoPIM Shopify Plugin',
            type: 'Open-source contribution',
            description: 'Feature work and enhancements for the Shopify plugin in the UnoPIM ecosystem.',
            contribution: 'Contributed new features and improved existing plugin functionality for product data workflows.',
            tags: ['UnoPIM', 'Shopify', 'PHP', 'Laravel', 'APIs'],
            links: [
                {
                    label: 'GitHub',
                    url: 'https://github.com/unopim/shopify-connector',
                },
            ],
        },
        {
            title: 'Saison Components Website',
            type: 'Business website',
            description: 'Company website work focused on responsive design, performance, content updates, and user experience.',
            contribution: 'Maintained the website, managed content, supported SEO improvements, and handled web-related technical support.',
            tags: ['HTML', 'CSS', 'PHP', 'WordPress', 'SEO'],
            links: [
                {
                    label: 'Live Site',
                    url: 'https://saisoncomponents.com',
                },
            ],
        },
    ]

    return (
        <>
            <section id="projects">
                <div className="container">
                    <p className="section-kicker" data-aos="flip-up" data-aos-duration="1000">
                        Projects
                    </p>
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Selected Work
                    </h2>
                    <p className="section-intro">
                        A focused set of projects and professional work aligned with my current
                        backend, Laravel, PIM, API, and full-stack development direction.
                    </p>

                    <div className="project-list">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects

export { Projects }
