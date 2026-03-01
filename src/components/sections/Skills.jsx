import React from 'react'
import SkillCard from '../ui/SkillCard'

function Skills() {
    const skills = [
        {
            title: "ReactJS",
            description: "Building modern, component-based user interfaces using React. Experienced in hooks, state management, routing, and creating scalable SPA applications with optimized performance.",
            icon: "⚛️"
        },
        {
            title: "VueJS",
            description: "Developing reactive and dynamic web applications using Vue ecosystem. Familiar with Vue Router, component lifecycle, and state-driven UI architecture.",
            icon: "🟢"
        },
        {
            title: "PHP",
            description: "Strong backend development skills using core PHP. Experience in authentication systems, REST APIs, form handling, and secure server-side logic implementation.",
            icon: "🐘"
        },
        {
            title: "MySQL",
            description: "Designing relational databases, writing optimized queries, joins, indexing, and handling data relationships efficiently for scalable applications.",
            icon: "🗄️"
        },
        {
            title: "Appwrite",
            description: "Integrating Appwrite for backend-as-a-service solutions including authentication, database management, file storage, and secure API handling in modern web apps.",
            icon: "🚀"
        },
        {
            title: "Laravel",
            description: "Building robust MVC applications using Laravel framework. Experience with routing, middleware, Eloquent ORM, authentication, and RESTful API development.",
            icon: "🔴"
        },
        {
            title: "Symfony",
            description: "Working with Symfony framework to build structured and maintainable enterprise-level applications following best coding standards and reusable components.",
            icon: "🎯"
        }
    ]
    return (
        <>
            <section id="services">
                <div className="container">
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Skills
                    </h2>
                    <div className="services-list">
                        {
                            skills.map((skill, index) =>
                                < SkillCard key={index} skill={skill} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills

export { Skills }