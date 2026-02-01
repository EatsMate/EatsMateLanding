import React from 'react';
import './Features.css';

const FeatureRow = ({ title, description, imageComponent, reverse }) => (
    <div className={`feature-row ${reverse ? 'reverse' : ''}`}>
        <div className="feature-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="feature-visual">
            {imageComponent}
        </div>
    </div>
);

// Mockup components for visuals
const MapMockup = () => (
    <div className="mockup-container map-mockup">
        <div className="map-overlay">
            <div className="avatar-pin pin-a">A</div>
            <div className="avatar-pin pin-b">B</div>
            <div className="avatar-pin pin-c">C</div>
        </div>
    </div>
);

const ReviewMockup = () => (
    <div className="mockup-container review-mockup">
        <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Super adresse ! Les pâtes sont incroyables."</p>
            <div className="reviewer">- Thomas</div>
        </div>
    </div>
);

const WishlistMockup = () => (
    <div className="mockup-container wishlist-mockup">
        <div className="wishlist-item">📍 Italian Spot</div>
        <div className="wishlist-item">📍 Burger Joint</div>
        <div className="wishlist-item">📍 Sushi Bar</div>
    </div>
);

export const Features = () => {
    return (
        <section className="features-section container">
            <div className="section-header">
                <h2>Comment EatsMate sublime vos expériences culinaires.</h2>
            </div>

            <div className="features-list">
                <FeatureRow
                    title="Carte Interactive Sociale"
                    description="Visualisez d'un coup d'œil où vos amis ont mangé et ce qu'ils ont adoré."
                    imageComponent={<MapMockup />}
                    reverse={false}
                />
                <FeatureRow
                    title="Avis Simplifiés"
                    description="Laissez une note rapide et un commentaire concis pour guider vos proches."
                    imageComponent={<ReviewMockup />}
                    reverse={true}
                />
                <FeatureRow
                    title="Wishlist Partagée"
                    description="Créez et partagez des listes de restaurants à tester avec vos amis."
                    imageComponent={<WishlistMockup />}
                    reverse={false}
                />
            </div>
        </section>
    );
};
