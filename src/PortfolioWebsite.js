import React from 'react';
import NavBar from './WebsiteComponents/NavBar';
import HomeComponent from './WebsiteComponents/HomeComponent';
import AboutMe from './WebsiteComponents/AboutMe';
import MySkills from './WebsiteComponents/MySkills';
import Experience from './WebsiteComponents/Experience';
import Contact from './WebsiteComponents/Contact';
import './App.css';

function PortfolioWebsite() {
  return (
    <div className="main-container">
      <NavBar />
      <HomeComponent />
      <AboutMe />
      <MySkills />
      <Experience />
      <Contact />
    </div>
  );
}

export default PortfolioWebsite;
