import FaultyTerminal from '../Components/FaultyTerminal.jsx';

export default function Home(){

    return (
        <>
            <h1 style={{ color: 'white', position: 'relative', zIndex: 10 }}>
                If you see this, React is working!
            </h1>

            <div className="backgroundContainer" style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: -1}}>
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
        </>
    )
}