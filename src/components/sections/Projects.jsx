import React from 'react'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
    const projectGroups = [
        {
            title: 'Personal Project',
            description: 'A project I built to practice full-stack Laravel application structure.',
            projects: [
                {
                    title: 'Laravel CRM',
                    type: 'Full-stack project',
                    description: 'A CRM with lead, customer, contact, support ticket, activity, notification, and reporting modules.',
                    contribution: 'Built the app structure with role-based access, permissions, reusable components, and service-layer code.',
                    tags: ['Laravel', 'React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'MySQL'],
                    links: [
                        {
                            label: 'GitHub',
                            url: 'https://github.com/DevrajJaiswal/laravel-crm',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Company & Open Source Work',
            description: 'Selected work from company websites and open-source contribution.',
            projects: [
                {
                    title: 'UnoPIM Shopify Plugin',
                    type: 'Open-source contribution',
                    description: 'Feature work and improvements for the Shopify connector in the UnoPIM ecosystem.',
                    contribution: 'Worked on plugin functionality for product data workflows and Shopify integration.',
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
                    type: 'Company website',
                    description: 'Website work for Saison Components with updates around content, responsiveness, performance, and SEO.',
                    contribution: 'Maintained the website, managed content updates, supported SEO, and handled web-related technical support.',
                    tags: ['HTML', 'CSS', 'PHP', 'WordPress', 'SEO'],
                    links: [
                        {
                            label: 'Live Site',
                            url: 'https://saisoncomponents.com',
                        },
                    ],
                },
            ],
        },
    ]

    const groupHeadingId = (title) => title.toLowerCase().replaceAll(' ', '-').replace('&', 'and')

    return (
        <section id="projects">
            <div className="container">
                <p className="section-kicker" data-aos="flip-up" data-aos-duration="1000">
                    Projects
                </p>
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Projects I Can Talk Through
                </h2>
                <p className="section-intro">
                    A short list of work that matches my current PHP, Laravel, WordPress, API,
                    and frontend experience.
                </p>

                <div className="project-groups">
                    {projectGroups.map((group) => (
                        <section
                            className="project-group"
                            key={group.title}
                            aria-labelledby={`${groupHeadingId(group.title)}-heading`}
                        >
                            <div className="project-group-heading">
                                <h3 id={`${groupHeadingId(group.title)}-heading`}>{group.title}</h3>
                                <p>{group.description}</p>
                            </div>
                            <div className="project-list">
                                {group.projects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

export { Projects }
