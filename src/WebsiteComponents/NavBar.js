import React from 'react';
import { Link } from 'react-scroll';
import '../ComponentStyles/NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul className="nav-items">
                <li><Link activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
