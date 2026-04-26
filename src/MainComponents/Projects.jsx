import React, { useState } from 'react';
import BubbleMenu from "../Components/BubbleMenu.jsx";
import CircularGallery from "../Components/CircularGallery.jsx";
import s11 from '../images/s11.jpeg'
import s12 from '../images/s12.jpeg'
import s13 from '../images/s13.jpeg'
import s21 from '../images/s21.jpeg'
import s22 from '../images/s22.jpeg'
import s23 from '../images/s23.jpeg'
import s31 from '../images/s31.jpeg'
import s32 from '../images/s32.jpeg'
import s33 from '../images/s33.jpeg'

export default function Projects() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Example gallery items using placeholder images
    const galleryItems = [
        { image: s11, text: 'FTC Centerstage: \nfirst ever robot built' },
        { image: s12, text: 'FTC Centerstage: \ncompetition robot' },
        { image: s13, text: 'FTC Centerstage: \nregionals robot'},
        { image: s21, text: 'FTC Into the Deep: \nprototype robot' },
        { image: s22, text: 'FTC Into the Deep: \ncompetition robot' },
        { image: s23, text: 'FTC Into the Deep: \nregionals robot' },
        { image: s31, text: 'FTC Decode: \ncompetition robot' },
        { image: s32, text: 'FTC Decode: \nregionals robot' },
        { image: s33, text: 'FTC Decode: \nnationals robot' },
    ];
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
            {/* Gallery Container */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                <CircularGallery 
                    items={galleryItems} 
                    bend={3} 
                    textColor="#A7EF9E" 
                    borderRadius={0.05} 
                    scrollEase={0.02}
                />
            </div>

            <div style={{ 
                position: 'absolute', 
                top: window.innerHeight > window.innerWidth ? '1em' : '2em', 
                left: '1em', 
                zIndex: 5,
                pointerEvents: 'none'
            }}>
                <h1 style={{ 
                    color: '#A7EF9E', 
                    fontSize: 'clamp(2rem, 10vw, 5rem)', 
                    margin: 0, 
                    lineHeight: 1,
                    textShadow: '0 0 10px rgba(167, 239, 158, 0.5)' 
                }}>Projects</h1>
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
