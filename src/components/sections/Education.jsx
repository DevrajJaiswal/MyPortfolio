import React from 'react'

function Education() {
    const education = [
        {
            degree: 'MCA',
            school: 'Dr. A.P.J. Abdul Kalam Technical University',
            location: 'Lucknow, Uttar Pradesh',
            period: 'August 2023 - June 2025',
        },
        {
            degree: 'BCA',
            school: 'Chaudhary Charan Singh University',
            location: 'Meerut, Uttar Pradesh',
            period: 'August 2019 - June 2022',
        },
    ]

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Education
                </h2>
                <p className="section-intro">
                    I studied computer applications at AKTU and CCSU.
                </p>

                <div className="education-list">
                    {education.map((item) => (
                        <article className="education-card" key={`${item.degree}-${item.period}`} data-aos="fade-up">
                            <div>
                                <h3>{item.degree}</h3>
                                <p>{item.school}</p>
                            </div>
                            <div className="education-meta">
                                <span>{item.period}</span>
                                <span>{item.location}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
