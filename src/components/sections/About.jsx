import React, { useState } from 'react'

function About() {
    const [activeTab, setActiveTab] = useState('skills');

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

                            <div className="tab-titles">
                                <button
                                    type="button"
                                    className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('skills')}
                                >
                                    Skills
                                </button>
                                <button
                                    type="button"
                                    className={`tab-links ${activeTab === 'experiences' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('experiences')}
                                >
                                    Experience
                                </button>
                                <button
                                    type="button"
                                    className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('education')}
                                >
                                    Education
                                </button>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                <ul>
                                    <li>
                                        <span>Frontend: </span>HTML, CSS, JavaScript, Bootstrap,
                                        jQuery, AJAX
                                    </li>
                                    <li><span>Backend: </span>PHP, Laravel, MySQL, REST API</li>
                                    <li><span>CMS & Tools: </span>WordPress, Postman</li>
                                    <li><span>Version Control: </span>Git, GitHub</li>
                                    <li><span>Design: </span>Adobe Photoshop, Canva</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'experiences' ? 'active-tab' : ''}`} id="experiences">
                                <ul>
                                    <li>
                                        <span>Saison Components</span> - Web Developer & Tech Support<br />
                                        <span className="duration">Oct 2023 - June 2025</span>
                                    </li>
                                    <li>
                                        <span>Infonic Web</span> - Web Developer<br />
                                        <span className="duration">Oct 2022 - Sep 2023</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                <ul>
                                    <li>
                                        <span>MCA</span> - AKTU<br />
                                        <span className="duration">Aug 2023 - 2025</span>
                                        <br />Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>BCA</span> - CCS University<br />
                                        <span className="duration">Aug 2019 - June 2022</span>
                                        <br />Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>Intermediate</span> - UP Board<br />
                                        <span className="duration">July 2018 - April 2019</span>
                                        <br />Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>High School</span> - UP Board<br />
                                        <span className="duration">July 2016 - June 2017</span>
                                        <br />Ghaziabad, Uttar Pradesh
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About

export { About }
