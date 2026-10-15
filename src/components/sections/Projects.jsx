import React from 'react'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
    const projectGroups = [
        {
            title: 'Personal Project',
            description: 'A personal Laravel project for managing leads, customers, and support work.',
            projects: [
                {
                    title: 'Laravel CRM',
                    type: 'Full-stack project',
                    description: 'A CRM with modules for leads, customers, contacts, support tickets, activities, notifications, and reports.',
                    contribution: 'I built the application with role-based permissions, reusable components, and a service layer.',
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
            description: 'A selection of my company and open-source work.',
            projects: [
                {
                    title: 'UnoPIM Shopify Plugin',
                    type: 'Open-source contribution',
                    description: 'An open-source Shopify connector for the UnoPIM platform.',
                    contribution: 'I contributed features and fixes for product data sync with Shopify.',
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
                    description: 'Website updates and maintenance for Saison Components.',
                    contribution: 'I updated website content and layouts, maintained front-end styles, and worked on technical fixes and basic SEO.',
                    tags: ['HTML', 'CSS', 'PHP', 'SEO'],
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
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Projects
                </h2>
                <p className="section-intro">
                    A mix of full stack application work, open-source contributions, and company website work.
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
