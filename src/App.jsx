import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Qualifications from './Pages/Qualifications';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;