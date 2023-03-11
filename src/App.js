import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <>
      <NavBar />
      <h1> hello moiwa</h1>
      <Routes>
        <Route path='/' component={< Home />} />
      </Routes>
    </>
    );
}

export default App;
