import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './MainComponents/Home.jsx';
import Projects from './MainComponents/Projects.jsx';
import Contact from './MainComponents/Contact.jsx';

function App() {
    return (
        <Router>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
        </Router>
    );
}

export default App;