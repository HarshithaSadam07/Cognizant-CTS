import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <h2>Welcome to Trainers Portal</h2>
      <p>This portal helps you explore our expert trainers across various technologies.</p>
      <Link to="/trainers" className="btn">View All Trainers</Link>
    </div>
  )
}

export default Home
