import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import Activities from './pages/Activities';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}