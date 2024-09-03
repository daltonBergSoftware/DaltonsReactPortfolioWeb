import React from 'react';
import '../ComponentStyles/HomeComponent.css';

function HomeComponent() {
    return (
        <div id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Hi, I'm Dalton Berg</h1>
                    <h2>Software Engineering Student at ASU</h2>
                    <p>Determined Learner with experience in Software Development</p>
                    <h3>Interests:</h3>
                    <ul>
                        <li>Software Engineering</li>
                        <li>Software Development</li>
                        <li>Backend Development</li>
                        <li>AI Engineering</li>
                    </ul>
                </div>
                <div className="home-image">
                    <div className="image-container">
                        <img className="front-image" src={require('../ImagesForPortfolioWeb/DaltonsPortfolioPicture.jpg')} alt="Dalton Berg" />
                        <img className="back-image" src={require('../ImagesForPortfolioWeb/PortfolioHomeBackgroundImg.jpeg')} alt="Technology Background" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
