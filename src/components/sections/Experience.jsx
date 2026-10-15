import React from 'react'

function Experience() {
    const roles = [
        {
            company: 'Webkul Software Pvt Ltd',
            role: 'Associate Software Engineer',
            location: 'Noida, Uttar Pradesh',
            period: 'July 2025 - September 2026',
            stack: ['Laravel', 'Symfony', 'Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL'],
            points: [
                'Developed and enhanced 10+ custom plugins and API connectors for enterprise platforms, including Pimcore and UnoPIM, integrating REST and GraphQL endpoints with 5+ third-party systems such as Shopify, BigCommerce, and ERPNext.',
                'Contributed core features and performance enhancements to the open-source UnoPIM Shopify plugin, improving API response speed and data sync efficiency by 50%.',
                'Developed AI-driven plugins using LLM APIs to automate product title, description, and metadata generation, reducing manual catalog entry time by 60%.',
                'Diagnosed and resolved 15+ critical production issues across backend services and API integrations, improving system stability and uptime.',
                'Configured automated GitHub Actions CI/CD pipelines, reducing manual deployment time by 40% and streamlining testing procedures.',
            ],
        },
        {
            company: 'Saison Components LLP',
            role: 'Web Developer',
            location: 'Ghaziabad, Uttar Pradesh',
            period: 'May 2024 - June 2025',
            stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress'],
            points: [
                'Built and maintained responsive web pages and landing pages using HTML, CSS, JavaScript, and WordPress.',
                'Managed website content updates, layout adjustments, and front-end styling across company platforms serving thousands of monthly visitors.',
                'Executed technical site troubleshooting, asset updates, and basic SEO configurations, boosting site loading speed and search visibility.',
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Experience
                </h2>
                <p className="section-intro">
                    At Webkul, I developed plugins and API connectors; at Saison Components, I built and maintained responsive company websites.
                </p>

                <div className="experience-list">
                    {roles.map((role) => (
                        <article className="experience-card" key={`${role.company}-${role.period}`} data-aos="fade-up">
                            <div className="experience-heading">
                                <div>
                                    <h3>{role.company}</h3>
                                    <p>{role.role}</p>
                                </div>
                                <div className="experience-meta">
                                    <span>{role.period}</span>
                                    <span>{role.location}</span>
                                </div>
                            </div>

                            <ul className="experience-points">
                                {role.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>

                            <ul className="skill-tags experience-stack" aria-label={`${role.company} technologies`}>
                                {role.stack.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
