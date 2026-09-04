import React from 'react'

function About() {
    const highlights = [
        'Full-stack web development with PHP, Laravel, MySQL, and JavaScript',
        'Responsive business websites with clean layouts and practical UX',
        'API, authentication, form handling, and database-driven features',
    ];

    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                            <img src="images/devraj profile picture.png" alt="Devraj Jaiswal" />
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
                            <p className="section-kicker">About Me</p>
                            <h2>Developer who enjoys building useful websites end to end.</h2>

                            <div className="about-copy">
                                <p>
                                    I am Devraj Jaiswal, a Full Stack Web Developer based in Ghaziabad,
                                    Uttar Pradesh. I work across frontend and backend development, with a
                                    stronger focus on PHP, Laravel, MySQL, REST APIs, and practical
                                    business websites.
                                </p>
                                <p>
                                    My work includes responsive interfaces, backend logic, form handling,
                                    authentication flows, database features, and websites built to be clear,
                                    maintainable, and useful for real users.
                                </p>
                            </div>

                            <ul className="about-highlights" aria-label="Development strengths">
                                {highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

export { About }
