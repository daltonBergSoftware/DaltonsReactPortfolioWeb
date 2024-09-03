import React, { useState, useEffect } from 'react';
import '../ComponentStyles/MySkills.css';
import {
    FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaAws, FaLinux, FaWindows, FaApple, FaGithub, FaGitAlt, FaDatabase, FaDocker
} from 'react-icons/fa';
import { SiMongodb, SiDjango, SiBootstrap, SiFastapi, SiJavascript, SiCplusplus, SiMysql, SiNextdotjs, SiGraphql, SiTypescript } from 'react-icons/si';

const skills = {
    "Programming Languages": [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    "Frameworks/Libraries": [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
    ],
    "Databases": [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PrismaORM', icon: <FaDatabase /> }, // Adjust the icon if a better one is available
    ],
    "Operating Systems": [
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'MacOS', icon: <FaApple /> },
        { name: 'Windows', icon: <FaWindows /> },
    ],
    "Tools/Platforms": [
        { name: 'GitHub actions', icon: <FaGithub /> },
        { name: 'Git controls', icon: <FaGitAlt /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'RESTful API', icon: <FaDatabase /> }, // Adjust the icon if a better one is available
    ]
};

const MySkills = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const toggleCategory = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="skills" className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {Object.keys(skills).map(category => (
                    <div 
                        key={category} 
                        className={`skills-category ${isSmallScreen && expandedCategory === category ? 'expanded' : isSmallScreen ? 'collapsed' : ''}`}
                        onClick={() => isSmallScreen && toggleCategory(category)}
                    >
                        <h3>{category}</h3>
                        <ul>
                            {skills[category].map(skill => (
                                <li key={skill.name} className="skill-item">
                                    <span className="skill-icon">{skill.icon}</span>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MySkills;
