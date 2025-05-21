import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TanishLandingPage from './components/TanishLandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TanishLandingPage />} />
      </Routes>
    </Router>
  )
}

export default App