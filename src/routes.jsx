import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about/index.jsx'
import Home from './pages/home/index.jsx'


const AppRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes;