import React from 'react';
import './Footer.css';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <div className="footer-links">
                    <a href="#">À propos</a>
                    <a href="#">Contact</a>
                    <a href="#">Mentions Légales</a>
                    <a href="#">Politique de Confidentialité</a>
                </div>

                <div className="footer-social">
                    <a href="#" aria-label="Facebook"><Facebook /></a>
                    <a href="#" aria-label="Instagram"><Instagram /></a>
                    <a href="#" aria-label="Twitter"><Twitter /></a>
                </div>

                <div className="footer-copyright">
                    &copy; 2024 EatsMate. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};
