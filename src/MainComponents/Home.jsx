import { useState } from 'react';
import FaultyTerminal from '../Components/FaultyTerminal.jsx';
import ASCIIText from "../Components/AsciiText.jsx";
import BubbleMenu from "../Components/BubbleMenu.jsx";

export default function Home(){
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
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div 
                className="backgroundContainer" 
                style={{ 
                    width: '100vw', 
                    height: '100vh', 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    zIndex: 0,
                    background: '#000',
                    transition: 'opacity 0.3s ease'
                }}
            >
                <div style={{ 
                    width: '100%',
                    height: '100%'
                }}>
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={[2, 1]}
                        digitSize={1.4}
                        timeScale={0.8}
                        pause={false}
                        scanlineIntensity={0.8}
                        glitchAmount={1}
                        flickerAmount={1}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0.12}
                        tint="#A7EF9E"
                        mouseReact
                        mouseStrength={0.5}
                        pageLoadAnimation
                        brightness={0.6}
                    />
                </div>
            </div>

            <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                zIndex: 1, 
                width: '100vw', 
                height:'100vh', 
                transform: 'translate(-50%, -50%)', 
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ASCIIText
                    text="Robots!"
                    enableWaves={false}
                    asciiFontSize={window.innerWidth < 768 ? (window.innerHeight > window.innerWidth ? 4 : 5) : 9}
                    planeBaseHeight={window.innerWidth < 768 ? (window.innerHeight > window.innerWidth ? 6 : 8) : 8}
                />
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
    )
}