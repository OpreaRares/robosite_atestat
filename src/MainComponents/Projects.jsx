import React, { useState } from 'react';
import BubbleMenu from "../Components/BubbleMenu.jsx";
import CircularGallery from "../Components/CircularGallery.jsx";

export default function Projects() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Example gallery items using placeholder images
    const galleryItems = [
        { image: 'robosite_atestat/src/images/s11.jpeg', text: 'FTC Centerstage: \nfirst ever robot built' },
        { image: 'src/images/s12.jpeg', text: 'FTC Centerstage: \ncompetition robot' },
        { image: 'src/images/s13.jpeg', text: 'FTC Centerstage: \nregionals robot'},
        { image: 'src/images/s21.jpeg', text: 'FTC Into the Deep: \nprototype robot' },
        { image: 'src/images/s22.jpeg', text: 'FTC Into the Deep: \ncompetition robot' },
        { image: 'src/images/s23.jpeg', text: 'FTC Into the Deep: \nregionals robot' },
        { image: 'src/images/s31.jpeg', text: 'FTC Decode: \ncompetition robot' },
        { image: 'src/images/s32.jpeg', text: 'FTC Decode: \nregionals robot' },
        { image: 'src/images/s33.jpeg', text: 'FTC Decode: \nnationals robot' },
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

            {/* Content Overlay */}
            <div style={{ 
                position: 'absolute', 
                top: '2em', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                zIndex: 5,
                pointerEvents: 'none',
                height: '48px', // Matching --bubble-size in BubbleMenu.css
                display: 'flex',
                alignItems: 'center'
            }}>
                <h1 style={{ color: '#A7EF9E', fontSize: '2.5rem', margin: 0, textShadow: '0 0 10px rgba(167, 239, 158, 0.5)' }}>Projects</h1>
            </div>
            
            <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100vw', height:'100vh', pointerEvents: 'none' }}>
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
