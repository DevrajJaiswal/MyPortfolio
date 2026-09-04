import React from 'react'

function Experience() {
    const roles = [
        {
            company: 'Webkul Software Pvt Ltd',
            role: 'Associate Software Engineer',
            location: 'Noida, Uttar Pradesh',
            period: 'July 2025 - September 2026',
            stack: ['Laravel', 'Symfony', 'React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'MySQL', 'REST APIs', 'GraphQL'],
            points: [
                'Developed and enhanced plugins and connectors for Pimcore and UnoPIM.',
                'Integrated REST and GraphQL APIs with platforms including Shopify, ERPNext, BigCommerce, and commercetools.',
                'Contributed to the open-source Shopify plugin for UnoPIM by adding features and improving existing functionality.',
                'Built AI-powered UnoPIM plugins using LLM APIs for product title, description, and metadata generation.',
                'Resolved production issues across backend services and integrations, improving application stability.',
                'Implemented GitHub Actions CI/CD workflows to support automated delivery.',
            ],
        },
        {
            company: 'Saison Components LLP',
            role: 'Web Master & Tech Support',
            location: 'Ghaziabad, Uttar Pradesh',
            period: 'October 2023 - June 2025',
            stack: ['HTML', 'CSS', 'PHP', 'WordPress', 'SEO'],
            points: [
                'Developed and maintained the company website with a focus on responsive design, performance, and user experience.',
                'Implemented SEO best practices to improve search visibility and organic traffic.',
                'Managed website content and digital platforms while providing technical support for website-related and basic IT issues.',
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="container">
                <p className="section-kicker" data-aos="flip-up" data-aos-duration="1000">
                    Experience
                </p>
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Professional Experience
                </h2>
                <p className="section-intro">
                    Recent roles and responsibilities from my updated resume, focused on backend development,
                    integrations, PIM work, and practical web delivery.
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
