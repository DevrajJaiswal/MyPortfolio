import React from 'react'
import { Link } from 'react-router-dom'

function SkillCard({ skill }) {
    return (
        <>
            <div className="service" data-aos="zoom-out-up" data-aos-offset="200" data-aos-duration="1000">
                <span className="">{skill.icon}</span>
                <h3>{skill.title}</h3>
                <div className='mb-5'>
                    <p>{skill.description}</p>
                </div>
                <Link to="/skills">See My Work...</Link>
            </div>
        </>
    )
}

export default SkillCard