import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
