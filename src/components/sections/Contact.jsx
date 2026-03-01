import React from 'react'
import Button from '../ui/Button'

function Contact() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                        Contact Us
                    </h2>
                    <div className="row">
                        <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                            <ul>
                                <li>
                                    <a href="https://g.co/kgs/BRhj1bP" target="_blank"><i className="fa fa-location-dot"></i> Mohan Nagar,
                                        Ghaziabad,
                                        UP-201007</a>
                                </li>
                                <li>
                                    <a href="mailto:devrajjaiswal337@gmail.com"><i
                                        className="fa fa-paper-plane"></i>devrajjaiswal337@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:+919456842394">
                                        <i className="fa fa-phone"></i>+91-94568-42394</a>
                                </li>
                                <ul className="social-icons">
                                    <a href="https://www.linkedin.com/in/devraj-jaiswal/" target="_blank"><i
                                        className="fa-brands fa-linkedin"></i></a>
                                    <a href="https://github.com/devrajjaiswal" target="_blank"><i className="fa-brands fa-github"
                                        aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/Devraj010?t=wAnzjyt0awiTG6O-FNXp_w&s=09" target="_blank"><i
                                        className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/@devraj_jaiswal" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                                </ul>
                            </ul>
                            <Button type='route' text='Download Resume' link='images/Devraj-Resume-Web-Developer.pdf' />
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
                            <form action="https://formspree.io/f/mbjbwnaa" method="POST">
                                <input type="text" id="name" name="name" placeholder="Enter your name" autoComplete="off" required />
                                <input type="email" name="email" id="email" placeholder="Enter your E-mail" autoComplete="off" required />
                                <textarea name="message" id="message" placeholder="Type your message" autoComplete="off" cols="" rows="4"
                                    minLength="5"></textarea>
                                <Button type='Button' text='Submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact