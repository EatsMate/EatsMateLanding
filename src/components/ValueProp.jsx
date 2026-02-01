import React from 'react';
import { Handshake, MapPin, Heart } from 'lucide-react';
import './ValueProp.css';

const ValueCard = ({ icon: Icon, title, description, color }) => (
    <div className="value-card">
        <div className="icon-wrapper" style={{ backgroundColor: color }}>
            <Icon size={32} color="white" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export const ValueProp = () => {
    return (
        <section className="value-section container">
            <div className="section-header">
                <h2>Pourquoi EatsMate change la donne ?</h2>
            </div>

            <div className="values-grid">
                <ValueCard
                    icon={Handshake}
                    title="Confiance"
                    description="Des avis 100% fiables, exclusivement de votre cercle d'amis."
                    color="#800020" // Bordeaux
                />
                <ValueCard
                    icon={MapPin}
                    title="Découverte"
                    description="Explorez une carte personnalisée des pépites culinaires autour de vous."
                    color="#1A2238" // Dark Blue
                />
                <ValueCard
                    icon={Heart}
                    title="Partage"
                    description="Recommandez facilement vos coups de cœur et inspirez vos proches."
                    color="#800020" // Bordeaux
                />
            </div>
        </section>
    );
};
