import React from 'react';
import './Contact.css';
import BaselineSeven from '../BaselineSeven/BaselineSeven';
import EmailImg from '../../img/email.png';
import LinkedInImg from '../../img/linkedin.png';
import InstagramImg from '../../img/instagram.png';

const Contact = () => {
    return (
        <>
            <BaselineSeven></BaselineSeven>
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    Feel free to connect with me through any of the platforms below.
                </p>
                <div className="contact-links">
                    {/* LinkedIn Link */}
                    <a href="https://www.linkedin.com/in/connect-fenil-lad/"
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={LinkedInImg}
                            alt="LinkedIn"
                            className="contact-icon" />
                        LinkedIn
                    </a>

                    {/* Instagram Link */}
                    <a href="https://www.instagram.com/fenstaer/"
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={InstagramImg}
                            alt="Instagram"
                            className="contact-icon" />
                        Instagram
                    </a>

                    {/* Email Link */}
                    <a href="mailto:fenillad2103@gmail.com"
                        className="contact-link">
                        <img src={EmailImg}
                            alt="Email"
                            className="contact-icon" />
                        Email
                    </a>
                </div>
            </div>
        </>

    );
};

export default Contact;
