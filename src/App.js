import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeGallery from './pages/HomeGallery';  // Import the consolidated component
import PaintingDetail from './pages/PaintingDetail';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeGallery />} />  {/* Use HomeGallery for the homepage */}
                <Route path="/painting/:id" element={<PaintingDetail />} />  {/* Route for painting details */}
            </Routes>
        </Router>
    );
}

export default App;

