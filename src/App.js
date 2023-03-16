import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import './index.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import StudentPrograms from './components/StudentProgram'
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/studentPrograms' element={< StudentPrograms />} />
        <Route path='/gallery' element={< Gallery />} />
        <Route path='/team' element={< Team />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/aboutUs' element={< AboutUs />} />
      </Routes>
      <Footer />
    </>

    );
}

export default App;
