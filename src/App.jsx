import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './MainComponents/Home.jsx';

function App() {
    return (
        <Router>
            {/* Background container */}
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>

                {/* Your Routes/Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;