import React from 'react'
import Button from '../ui/Button'

function Hero() {
    return (
        <>
            <section id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                                <h1>Hi, I'm <span>Devraj Jaiswal</span> From Ghaziabad</h1>
                                <h2>Full Stack Developer</h2>
                                <p>
                                    Passionate about crafting scalable, SEO-friendly, and
                                    user-centric web solutions to help businesses grow online.
                                </p>
                                <Button type='route' text='Contact Me' link='contact' />
                            </div>
                            <div className="right" data-aos="fade-left" data-aos-duration="800">
                                <img src="images/full stack.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero