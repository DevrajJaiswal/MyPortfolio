import React from 'react'
import Button from '../ui/Button'
import { RESUME_URL } from '../../config/links'

function Hero() {
    return (
        <>
            <section id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                                <p className="hero-eyebrow">Devraj Jaiswal <span>| Ghaziabad, India</span></p>
                                <h1>Full stack developer building useful web applications.</h1>
                                <p className="hero-copy">
                                    I work across backend services, APIs, and responsive interfaces. Recent projects include web applications and platform connections.
                                    I&apos;m open to full stack and backend opportunities.
                                </p>

                                <div className="hero-actions">
                                    <Button type='route' text='Get in touch' link='contact' />
                                    <Button type='route' text='View my work' link='projects' />
                                </div>

                                <div className="hero-links" aria-label="Professional links">
                                    <a href={RESUME_URL} target="_blank" rel="noreferrer">
                                        Resume
                                    </a>
                                    <a href="https://github.com/devrajjaiswal" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/devraj-jaiswal/" target="_blank" rel="noreferrer">
                                        LinkedIn
                                    </a>
                                </div>

                            </div>
                            <div className="right" data-aos="fade-left" data-aos-duration="800" aria-hidden="true">
                                <div className="hero-visual">
                                    <div className="integration-card">
                                        <div className="integration-card-top"><span className="status-dot"></span> Application architecture</div>
                                        <div className="integration-flow">
                                            <div className="integration-node"><span>Frontend</span><strong>Responsive UI</strong></div>
                                            <div className="integration-connector">API</div>
                                            <div className="integration-node"><span>Backend</span><strong>Services &amp; data</strong></div>
                                        </div>
                                        <div className="integration-card-footer">APIs <span>·</span> Backend services <span>·</span> React</div>
                                    </div>
                                    <p className="hero-visual-note">From interface to data layer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
