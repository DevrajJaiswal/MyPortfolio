import React from 'react'

function About() {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="row about-layout">
                        <figure className="left about-portrait" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                            <img src="images/devraj profile picture.png" alt="Devraj Jaiswal" />
                            <figcaption>
                                <strong>Devraj Jaiswal</strong>
                                <span>Full Stack Developer <i aria-hidden="true">&middot;</i> Ghaziabad, India</span>
                            </figcaption>
                        </figure>
                        <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
                            <h2 className="section-title">About</h2>

                            <div className="about-copy">
                                <p>
                                    I&apos;m a full stack developer with 2+ years of professional experience building web applications, APIs, and integrations.
                                    I enjoy work that connects backend services and data with useful features in the interface.
                                </p>
                                <p>
                                    At Webkul, I developed plugins and API connectors for Pimcore and UnoPIM, integrating platforms such as Shopify,
                                    BigCommerce, and ERPNext. I contributed to the open-source UnoPIM Shopify plugin and built LLM-powered tools
                                    for product content. Before that, I built and maintained company websites at Saison Components.
                                </p>
                                <p>
                                    I&apos;m open to full stack, PERN stack, frontend, backend, and software engineering roles, and available to join immediately.
                                </p>
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
