import React from 'react'

function SkillCard({ skill }) {
    return (
        <article className="service" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <ul className="skill-tags" aria-label={`${skill.title} skills`}>
                {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    )
}

export default SkillCard
