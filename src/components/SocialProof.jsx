import React from 'react';
import './SocialProof.css';

const kTestimonials = [
    {
        text: "EatsMate a révolutionné la façon dont je choisis mes restaurants !",
        author: "Sophie M.",
        role: "Foodie"
    },
    {
        text: "Enfin une app où je fais vraiment confiance aux avis.",
        author: "Julien R.",
        role: "Étudiant"
    }
];

export const SocialProof = () => {
    return (
        <section className="social-proof-section container">
            <div className="section-header">
                <h2>Ils ont déjà adopté EatsMate.</h2>
            </div>

            <div className="testimonials-grid">
                {kTestimonials.map((t, idx) => (
                    <div className="testimonial-card" key={idx}>
                        <div className="avatar-placeholder">{t.author[0]}</div>
                        <div className="testimonial-content">
                            <p>"{t.text}"</p>
                            <div className="author-info">
                                <strong>{t.author}</strong>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="partners-section">
                <p>Bientôt en partenariat avec...</p>
                <div className="logos-grid">
                    <div className="logo-placeholder">RestoGroup</div>
                    <div className="logo-placeholder">FoodGuide</div>
                    <div className="logo-placeholder">ChefClub</div>
                </div>
            </div>
        </section>
    );
};
