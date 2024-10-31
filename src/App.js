// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Pricing from './Components/Pricing';       // Import Home component if you have one
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />               {/* Home Route */}
        <Route path="/about" element={<About />} />         {/* About Route */}
        <Route path="/pricing" element={<Pricing />} />     {/* Pricing Route */}
      </Routes>
      <Footer/>
    </Router>
  );
}
