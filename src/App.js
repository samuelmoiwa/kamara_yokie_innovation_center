import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'
import StudentPrograms from './components/StudentProgram'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/studentPrograms' element={< StudentPrograms />} />
      </Routes>
    </>
    );
}

export default App;
