import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './MainComponents/Home.jsx';

function App() {
    return (
        <Router>
                {/* Your Routes/Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
        </Router>
    );
}

export default App;