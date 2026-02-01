import React from 'react';
import './Button.css';

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    icon,
    href,
    className = ''
}) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            href={href}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
        </Component>
    );
};
