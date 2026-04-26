import FaultyTerminal from '../Components/FaultyTerminal.jsx';
import ASCIIText from "../Components/AsciiText.jsx";

export default function Home(){

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div className="backgroundContainer" style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1}}>
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

            <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1, width: '100vw', height:'100vh', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
                <ASCIIText
                    text="Roboti!"
                    enableWaves={false}
                    asciiFontSize={8}
                />
            </div>
        </div>
    )
}