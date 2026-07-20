import React, { useState } from 'react'
import ListofPlayers from './components/ListofPlayers'
import IndianPlayers from './components/IndianPlayers'

function App() {
  // Flag variable with if-else to switch between components
  const [showPlayers, setShowPlayers] = useState(true)

  let content
  if (showPlayers) {
    content = <ListofPlayers />
  } else {
    content = <IndianPlayers />
  }

  return (
    <div className="container">
      <h1>🏏 Cricket App</h1>
      <div className="toggle-btns">
        <button
          className={showPlayers ? 'active' : ''}
          onClick={() => setShowPlayers(true)}
        >
          List of Players
        </button>
        <button
          className={!showPlayers ? 'active' : ''}
          onClick={() => setShowPlayers(false)}
        >
          Indian Players
        </button>
      </div>
      {content}
    </div>
  )
}

export default App
