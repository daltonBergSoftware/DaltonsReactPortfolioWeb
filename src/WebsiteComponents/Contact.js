import React from 'react';
import '../ComponentStyles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-links">
                <a href="mailto:djberg3@asu.edu" target="_blank" rel="noopener noreferrer" className="contact-link email">
                    <FaEnvelope /> Mail
                </a>
                <a href="https://www.linkedin.com/in/dalton-berg-9b0a33255" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/daltonBergSoftware" target="_blank" rel="noopener noreferrer" className="contact-link github">
                    <FaGithub /> GitHub
                </a>
                <a href="https://docs.google.com/document/d/1p5CRLHfcztSfQtB-C1KuaIOtNYUpFZef/edit?usp=sharing&ouid=113072996624668415413&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="contact-link resume">
                    <FaFilePdf /> Resume
                </a>
            </div>
        </div>
    );
};

export default Contact;
