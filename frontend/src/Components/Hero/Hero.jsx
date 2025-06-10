import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/handwave.PNG'
import arrow_icon from '../Assets/arrow.PNG'
import hero_image from '../Assets/Hero.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="hero-hand-icon"/>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow-icon"/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero-image"/>
            </div>
        </div>
    );
};

export default Hero;