import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TrainersList from './pages/TrainersList'
import TrainerDetail from './pages/TrainerDetail'

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Trainers Portal</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/trainers">Trainers</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
      </Routes>
    </div>
  )
}

export default App
