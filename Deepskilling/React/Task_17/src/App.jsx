import React from 'react'
import Getuser from './components/Getuser'

function App() {
  return (
    <div className="container">
      <h1>👤 Random User Profiles</h1>
      <p className="subtitle">Fetched from api.randomuser.me</p>
      <Getuser />
    </div>
  )
}

export default App
