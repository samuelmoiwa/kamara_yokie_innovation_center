import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import './index.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import StudentPrograms from './components/StudentProgram'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/studentPrograms' element={< StudentPrograms />} />
      </Routes>
      <Footer />
    </>

    );
}

export default App;
