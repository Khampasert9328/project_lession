import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
//components

import Register from './components/Register/Register'
import Navbar from './components/Navbar/NavBar'
import Home from './components/Home/Home';


import Login from './Components/Login/Login'





function App() {
  return (
    <Routes>
      {/* Pass the components inside JSX */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
