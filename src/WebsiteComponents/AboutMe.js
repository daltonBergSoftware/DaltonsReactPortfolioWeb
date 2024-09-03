import React, { useState, useEffect, useCallback } from 'react';
import '../ComponentStyles/AboutMe.css';
import placeholder1 from '../ImagesForPortfolioWeb/HikingPicWebsite.jpg';
import placeholder2 from '../ImagesForPortfolioWeb/SedonaWebsite.jpg';
import placeholder3 from '../ImagesForPortfolioWeb/CamelbackWebsite.jpg';

const images = [placeholder1, placeholder2, placeholder3];

function AboutMe() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleNextImage = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
        }, 500);
    }, []);

    const handlePreviousImage = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(true);
        }, 500);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNextImage]);

    return (
        <div id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-gallery">
                    <img src={images[currentImageIndex]} alt="About me" className={fade ? 'fade-in' : 'fade-out'} />
                    <button onClick={handlePreviousImage} className="gallery-arrow left-arrow">‹</button>
                    <button onClick={handleNextImage} className="gallery-arrow right-arrow">›</button>
                    <div className="image-indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="about-text">
                    <p>
                        I am currently a student at Arizona State University, majoring in Software Engineering. Born and raised in Arizona, 
                        I have interests in a range of areas within the realm of computing, including Software Development, Artificial Intelligence 
                        Engineering, and Data Analytics. Always eager to explore and dive deeper, I am open to learning and improving new and 
                        previously known technologies and frameworks to enhance my diverse skill set.
                    </p>
                    <p>
                        I am committed to a journey of continual learning and self-improvement, with the aim to enhance my proficiency in software 
                        engineering. My goal is to acquire new skills and refine existing ones, ensuring that I am well-equipped to adapt and excel 
                        in the ever-evolving technological landscape. I seek to prepare myself diligently for future roles, pursuing excellence in 
                        my craft, and contributing effectively to the industry. It is my ambition to be not just a participant in the field of 
                        technology but to be a thoughtful and innovative contributor, constantly pushing boundaries and striving for the highest 
                        standards of professional excellence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
