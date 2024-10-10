import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import PaintingDetail from './pages/PaintingDetail';
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/painting/:id" element={<PaintingDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
