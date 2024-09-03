import React from 'react';
import '../ComponentStyles/Experience.css';
import gbcsLogo from '../ImagesForPortfolioWeb/GBCS-logo.png'; // GBCS logo
import globalTechLogo from '../ImagesForPortfolioWeb/GlobalTechEx-logo.png'; // Global Tech logo

function Experience() {
    return (
        <div id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-container">
                <div className="experience-scrollbox">
                    {/* Backend Developer Intern, GBCS Group */}
                    <div className="experience-item">
                        <div className="experience-header">
                            <img src={gbcsLogo} alt="GBCS Group Logo" className="company-logo" />
                            <div>
                                <h3>Backend Developer Intern, GBCS Group</h3>
                                <span className="experience-dates">February 2024 - Present</span>
                            </div>
                        </div>
                        <div>
                            <strong>GBCS GHG Project:</strong>
                            <ul>
                                <li>Collaborated with cross-functional teams on the software development life cycle, including planning, API design, documentation, testing, and maintenance.</li>
                                <li>Implemented and integrated Python-based equations into the backend system, enhancing application functionality.</li>
                                <li>Developed API endpoints with FastAPI for seamless data exchange between backend systems and frontend services, contributing to the GHG calculator's capabilities.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>GBCS Website Project:</strong>
                            <ul>
                                <li>Led the development of an advanced HR management system by architecting and implementing comprehensive GraphQL APIs, including complex mutations and queries for candidate management.</li>
                                <li>Integrated Prisma ORM with custom GraphQL resolvers to optimize data retrieval and manipulation.</li>
                                <li>Designed and delivered a user-centric HR dashboard using React and Next.js, providing an intuitive interface for HR operations.</li>
                                <li>Worked directly with the HR team to establish the structure and design of the system, ensuring it met user needs and company standards.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Team Lead, Intern Development Team, GBCS Group */}
                    <div className="experience-item">
                        <div className="experience-header">
                            <img src={gbcsLogo} alt="GBCS Group Logo" className="company-logo" />
                            <div>
                                <h3>Team Lead, Intern Development Team, GBCS Group</h3>
                                <span className="experience-dates">February 2024 - August 2024</span>
                            </div>
                        </div>
                        <ul>
                            <li>Chosen to lead a diverse team of 25+ frontend, backend, and research interns, fostering a collaborative and productive environment.</li>
                            <li>Organized and facilitated the execution of team tasks, plans, and goals, ensuring alignment with project deadlines and objectives.</li>
                            <li>Created and presented weekly progress reports to the supervisor and CEO, receiving and incorporating feedback to enhance team performance.</li>
                            <li>Spearheaded the onboarding and training of new interns, accelerating their adaptation and contribution to ongoing projects.</li>
                            <li>Maintained ongoing guidance and support for interns, ensuring clarity of roles and responsibilities for effective team functioning.</li>
                        </ul>
                    </div>

                    {/* The Global Tech Experience (Web Development Trainee) */}
                    <div className="experience-item">
                        <div className="experience-header">
                            <img src={globalTechLogo} alt="Global Tech Logo" className="company-logo" />
                            <div>
                                <h3>The Global Tech Experience (Web Development Trainee)</h3>
                                <span className="experience-dates">August 2023 - December 2023</span>
                            </div>
                        </div>
                        <ul>
                            <li>Utilized HTML, CSS, Bootstrap, and JavaScript to develop dynamic web applications, enhancing UX.</li>
                            <li>Collaborated with an international team, enhancing multicultural communication skills and project coordination.</li>
                            <li>Focused on implementing stakeholder needs into functional designs, ensuring user satisfaction.</li>
                            <li>Debugged and resolved coding issues, honing problem-solving skills to ensure the reliability and functionality of web applications.</li>
                            <li>Integrated multiple third-party APIs, broadening technical expertise and enriching the user experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
