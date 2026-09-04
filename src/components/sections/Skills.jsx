import React from 'react'
import SkillCard from '../ui/SkillCard'

function Skills() {
    const skills = [
        {
            title: 'Backend',
            description: 'Server-side development, MVC applications, business logic, and maintainable API-driven features.',
            items: ['PHP', 'Laravel', 'Symfony']
        },
        {
            title: 'Frontend',
            description: 'Responsive interfaces and component-based UI work for practical web applications.',
            items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'jQuery']
        },
        {
            title: 'Databases',
            description: 'Relational database work for application data, queries, and structured backend features.',
            items: ['MySQL', 'PostgreSQL']
        },
        {
            title: 'APIs & Integrations',
            description: 'Connecting applications and third-party platforms through structured API workflows.',
            items: ['REST APIs', 'GraphQL']
        },
        {
            title: 'PIM & Platforms',
            description: 'Product information management systems and platform integrations from recent professional work.',
            items: ['Pimcore', 'Akeneo PIM', 'UnoPIM']
        },
        {
            title: 'Tools & DevOps',
            description: 'Daily development tooling, version control, testing workflows, and deployment support.',
            items: ['Git', 'GitHub', 'GitLab', 'GitHub Actions', 'Docker', 'Firebase', 'Postman']
        },
        {
            title: 'AI-Assisted Development',
            description: 'Modern coding assistants used as part of development and problem-solving workflows.',
            items: ['Claude', 'OpenAI Codex', 'GitHub Copilot']
        }
    ]

    return (
        <>
            <section id="services">
                <div className="container">
                    <p className="section-kicker" data-aos="flip-up" data-aos-duration="1000">
                        Skills
                    </p>
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Skills & Tech Stack
                    </h2>
                    <p className="section-intro">
                        Technologies I use across backend development, frontend interfaces,
                        APIs, integrations, PIM platforms, and delivery workflows.
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
