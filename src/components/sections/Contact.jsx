import React from 'react'
import Button from '../ui/Button'
import { RESUME_URL } from '../../config/links'

function Contact() {
    const contactLinks = [
        {
            label: 'Email',
            value: 'devrajjaiswal337@gmail.com',
            href: 'mailto:devrajjaiswal337@gmail.com',
            icon: 'fa-paper-plane',
        },
        {
            label: 'Phone',
            value: '+91 94568 42394',
            href: 'tel:+919456842394',
            icon: 'fa-phone',
        },
        {
            label: 'Location',
            value: 'Ghaziabad, Uttar Pradesh',
            href: 'https://g.co/kgs/BRhj1bP',
            icon: 'fa-location-dot',
        },
    ]

    const socialLinks = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/devraj-jaiswal/',
            icon: 'fa-brands fa-linkedin',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/devrajjaiswal',
            icon: 'fa-brands fa-github',
        },
        {
            label: 'X',
            href: 'https://x.com/DevrajJaiswal15',
            icon: 'fa-brands fa-x',
        },
        {
            label: 'YouTube',
            href: 'https://www.youtube.com/@devraj_jaiswal',
            icon: 'fa-brands fa-youtube',
        },
    ]

    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title" data-aos="flip-up" data-aos-duration="1000">
                    Get in touch
                </h2>
                <p className="section-intro">
                    I&apos;m based in Ghaziabad and open to opportunities across Noida, Delhi NCR, Gurugram, Mumbai, Pune, Hyderabad, and Bengaluru.
                    I&apos;m available to join immediately. Email is the best way to reach me.
                </p>

                <div className="row">
                    <div className="left contact-details" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                        <ul className="contact-list">
                            {contactLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                                        <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                                        <span>
                                            <strong>{link.label}</strong>
                                            {link.value}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="social-icons" aria-label="Social links">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                                    <i className={link.icon} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>

                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn">
                            View Resume
                        </a>
                    </div>

                    <div className="right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
                        <form action="https://formspree.io/f/mbjbwnaa" method="POST">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" autoComplete="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your email" autoComplete="email" required />

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Tell me about the role or project" rows="4" minLength="5" required></textarea>

                            <Button type="submit" text="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

export { Contact }
