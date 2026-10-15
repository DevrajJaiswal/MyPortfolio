import React from 'react'
import SkillCard from '../ui/SkillCard'

function Skills() {
    const skills = [
        {
            title: 'Backend Development',
            description: 'Server-side frameworks and tools used to build application features and services.',
            items: ['Node.js', 'Express.js', 'Laravel', 'Symfony', 'PHP']
        },
        {
            title: 'Frontend',
            description: 'Responsive interfaces and frontend application development.',
            items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'jQuery']
        },
        {
            title: 'Database & Cloud',
            description: 'Databases and cloud services I have used in application work.',
            items: ['MySQL', 'PostgreSQL', 'Firebase']
        },
        {
            title: 'APIs & Real-Time',
            description: 'I work with REST, GraphQL, and LLM APIs, as well as WebSocket communication.',
            items: ['REST APIs', 'GraphQL', 'LLM APIs', 'WebSocket']
        },
        {
            title: 'Commerce & Product Platforms',
            description: 'Platforms I have worked with through product features and integrations.',
            items: ['Shopify', 'BigCommerce', 'ERPNext', 'Pimcore', 'Akeneo PIM', 'UnoPIM']
        },
        {
            title: 'Tools & DevOps',
            description: 'Tools I use for version control, containers, and deployment.',
            items: ['Git', 'GitHub', 'GitLab', 'Docker', 'GitHub Actions', 'CI/CD']
        },
        {
            title: 'AI Coding Tools',
            description: 'Coding assistants I use during development.',
            items: ['Claude', 'OpenAI Codex', 'GitHub Copilot']
        },
    ]

    return (
        <>
            <section id="services">
                <div className="container">
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Skills
                    </h2>
                    <p className="section-intro">
                        Technologies I use across frontend and backend development, APIs, data, and deployment.
                    </p>
                    <div className="services-list">
                        {skills.map((skill) => (
                            <SkillCard key={skill.title} skill={skill} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills

export { Skills }
