import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext' // Import the ThemeProvider
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        {' '}
        {/* Wrap the entire app with ThemeProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
