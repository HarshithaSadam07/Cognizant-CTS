import React, { useState } from 'react'
import CohortDetails from './components/CohortDetails'
import CohortData from './data/CohortData'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="container">
      <h1>Cohort Unit Testing App</h1>
      <div className="selector">
        {CohortData.map((c, i) => (
          <button
            key={c.id}
            className={selectedIndex === i ? 'active' : ''}
            onClick={() => setSelectedIndex(i)}
          >
            {c.code}
          </button>
        ))}
      </div>
      <CohortDetails cohort={CohortData[selectedIndex]} />
    </div>
  )
}

export default App
