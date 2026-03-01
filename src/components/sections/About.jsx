import React, { useState } from 'react'

function About() {
    const [activeTab, setActiveTab] = useState('skills');

    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                            <img src="images/devraj profile picture.png" alt="" />
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
                            <h2>About Me</h2>
                            <p className="para">
                                I'm Devraj Jaiswal, a Full Stack Web Developer based in Ghaziabad,
                                Uttar Pradesh, with 1.5 years of experience in building scalable,
                                SEO-friendly, and user-centric web solutions. With expertise in
                                HTML, CSS, JavaScript, PHP, and MySQL, I specialize in creating
                                high-performance websites and web applications tailored to
                                business needs.
                                <br /><br />
                                With a strong foundation in both frontend and backend development,
                                I bring problem-solving skills and technical expertise to every
                                project. Whether you're looking to add a skilled developer to your team or need support for a web project,
                                I'm here to help. Let’s connect and create something great together!
                            </p>
                            <div className="tab-titles">
                                <p
                                    className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('skills')}
                                >
                                    Skills
                                </p>
                                <p
                                    className={`tab-links ${activeTab === 'experiences' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('experiences')}
                                >
                                    Experience
                                </p>
                                <p
                                    className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                    onClick={() => setActiveTab('education')}
                                >
                                    Education
                                </p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                <ul>
                                    <li>
                                        <span>Frontend: </span>HTML, CSS, JavaScript, Bootstrap,
                                        jQuery, AJAX
                                    </li>
                                    <li><span>Backend: </span>PHP, MySQL, REST API</li>
                                    <li><span>CMS & Tools: </span>WordPress, Postman</li>
                                    <li><span>Version Control: </span>Git, GitHub</li>
                                    <li><span>Design: </span>Adobe Photoshop, Canva</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'experiences' ? 'active-tab' : ''}`} id="experiences">
                                <ul>
                                    <li>
                                        <span>Saison Components</span> - Web Developer & Tech Support<br />
                                        <span className="duration">Oct-2023 – June-2025.</span>
                                    </li>
                                    <li>
                                        <span>Infonic Web</span> - Web Developer<br />
                                        <span className="duration">Oct-2022 – Sep-2023.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                <ul>
                                    <li>
                                        <span>MCA</span> - AKTU<br /><span className="duration">Aug-2023 - 2025
                                        </span>
                                        - Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>BCA</span> - CCS University<br /><span className="duration">Aug-2019 - June-2022
                                        </span>
                                        - Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>Intermediate</span> - UP Board<br /><span className="duration">July-2018 - April-2019
                                        </span>
                                        - Ghaziabad, Uttar Pradesh
                                    </li>
                                    <li>
                                        <span>High School</span> - UP Board<br /><span className="duration">July-2016 - June-2017
                                        </span>
                                        - Ghaziabad, Uttar Pradesh
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

export {About}
