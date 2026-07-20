import React from 'react'
import CalculateScore from './components/CalculateScore'

function App() {
  return (
    <div className="container">
      <h1>Score Calculator</h1>
      <div className="cards-wrapper">
        <CalculateScore
          name="Alice Johnson"
          school="Springfield High School"
          total={500}
          goal={465}
        />
        <CalculateScore
          name="Bob Smith"
          school="Greenwood Academy"
          total={500}
          goal={350}
        />
        <CalculateScore
          name="Carol Williams"
          school="Riverside College"
          total={500}
          goal={240}
        />
      </div>
    </div>
  )
}

export default App
