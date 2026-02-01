import React from 'react';
import './Hero.css';
import { Button } from './Button';
import { Navbar } from './Navbar';

import landingImage from '../assets/image_landing.png';

const AppleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8 12.8c-0.1 2.5 2.2 3.4 2.3 3.4c-0.1 0.4-0.4 1.3-1.2 2.6c-1 1.5-2.1 1.7-2.9 1.7c-1.1 0-1.4-0.7-2.7-0.7c-1.3 0-1.7 0.7-2.8 0.7c-1 0-1.9-1-2.9-2.6c-2.3-3.3-1.6-8.2 2.6-9.9c1.1-0.4 2.2-0.2 2.9 0.1c0.7 0.3 1.9 0.3 2.6-0.1c0.3-0.1 1.4-0.6 2.5-0.1c1.3 0.6 2.2 2 2.3 2.1c-0.1 0.1-1.4 0.8-1.5 2.4zm-3-5.5c0.5-0.7 0.9-1.6 0.7-2.5c-0.8 0.1-1.7 0.5-2.2 1.1c-0.5 0.5-0.9 1.4-0.8 2.2c0.8 0.1 1.7-0.2 2.3-0.8z" />
    </svg>
);

const PlayStoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.1 2.6c-0.3 0.2-0.6 0.7-0.6 1.3v16.1c0 0.7 0.3 1.2 0.7 1.4L13.1 12.5L4.1 2.6zM15 14.5l3.8 3.8l-1.9 1.1c-0.7 0.4-1.8 0.4-2.5 0l-7.2-4.1l7.8-0.8zM20.1 9.7l-4.1 4.1l-1.9-1.9l4.1-4.1c0.4 0.4 0.8 1 0.8 1.9L20.1 9.7zM14.6 9.4l0.4 0.4L5.3 1.5l7 3.9C13 5.8 13.9 6.8 14.6 9.4z" />
    </svg>
);

export const Hero = () => {
    return (
        <div className="hero-section">
            <Navbar />
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>EatsMate : Découvrez les meilleures tables, recommandées par vos amis.</h1>
                    <p className="hero-subtitle">
                        Finis les avis anonymes et la déception. Ne faites confiance qu'à ceux que vous connaissez.
                    </p>
                    <div className="hero-cta">
                        <Button variant="primary" className="btn-store" icon={<AppleIcon />} href="https://eatsmate.github.io/EatsMateApp/">
                            App Store
                        </Button>
                        <Button variant="primary" className="btn-store" icon={<PlayStoreIcon />} href="https://eatsmate.github.io/EatsMateApp/">
                            Google Play
                        </Button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <img src={landingImage} alt="EatsMate App Interface" className="app-interface-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
