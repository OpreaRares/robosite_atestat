import React, { useState } from 'react';
import BubbleMenu from "../Components/BubbleMenu.jsx";

export default function Contact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items = [
        {
            label: 'home',
            href: '/',
            ariaLabel: 'Home',
            rotation: -8,
            hoverStyles: { bgColor: '#A7EF9E', textColor: '#000000' }
        },
        {
            label: 'projects',
            href: '/projects',
            ariaLabel: 'Projects',
            rotation: 8,
            hoverStyles: { bgColor: '#A7EF9E', textColor: '#000000' }
        },
        {
            label: 'contact',
            href: '/contact',
            ariaLabel: 'Contact',
            rotation: -8,
            hoverStyles: { bgColor: '#A7EF9E', textColor: '#000000' }
        }
    ];

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
            <div style={{ 
                position: 'absolute', 
                top: window.innerHeight > window.innerWidth ? '1em' : '2em', 
                left: window.innerWidth < 768 ? '1em' : '2em', 
                zIndex: 5,
                pointerEvents: 'none'
            }}>
                <h1 style={{ 
                    color: '#A7EF9E', 
                    fontSize: 'clamp(2rem, 10vw, 4rem)',
                    margin: 0,
                    lineHeight: 1,
                    padding: '0.25em 0'
                }}>Contact</h1>
            </div>
            
            <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100vw', height: window.innerHeight > window.innerWidth ? '80px' : '100px', pointerEvents: 'none' }}>
                <BubbleMenu
                    logo={<span style={{ fontWeight: 700, color: '#A7EF9E' }}>RB</span>}
                    items={items}
                    onMenuClick={setIsMenuOpen}
                    menuAriaLabel="Toggle navigation"
                    menuBg="#2d2d2d"
                    menuContentColor="#A7EF9E"
                    useFixedPosition={false}
                    animationEase="power3.out"
                    animationDuration={0.3}
                    staggerDelay={0.1}
                />
            </div>
        </div>
    );
}
