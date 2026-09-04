import React from 'react'
import Button from '../ui/Button'

function Hero() {
    const techStack = ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'React', 'REST APIs'];

    return (
        <>
            <section id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                                <p className="hero-eyebrow">Hi, I'm <span>Devraj Jaiswal</span> from Ghaziabad</p>
                                <h1>Full Stack Developer focused on PHP, Laravel, and practical web products.</h1>
                                <p className="hero-copy">
                                    I build responsive websites and full-stack web applications with clean frontend work,
                                    reliable backend logic, APIs, and database-driven features.
                                </p>

                                <div className="hero-actions">
                                    <Button type='route' text='Contact Me' link='contact' />
                                    <Button type='route' text='View Projects' link='projects' />
                                </div>

                                <div className="hero-links" aria-label="Professional links">
                                    <a href="https://drive.google.com/file/d/1yB37Holtk2cDniZHGEePtkTBCkyk5cc2/view?usp=sharing" target="_blank" rel="noreferrer">
                                        Resume
                                    </a>
                                    <a href="https://github.com/devrajjaiswal" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/devraj-jaiswal/" target="_blank" rel="noreferrer">
                                        LinkedIn
                                    </a>
                                </div>

                                <ul className="hero-tech" aria-label="Core technologies">
                                    {techStack.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="right" data-aos="fade-left" data-aos-duration="800">
                                <img src="images/full stack.png" alt="Full stack development illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
