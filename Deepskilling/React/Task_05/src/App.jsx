import React from 'react'
import CohortDetails from './components/CohortDetails'

const cohorts = [
  {
    id: 1,
    code: 'COHORT-2024-RJ01',
    name: 'ReactJS Batch 01',
    technology: 'ReactJS',
    trainer: 'Syed Ahmed',
    startDate: '01-Jan-2024',
    endDate: '30-Jun-2024',
    isOngoing: false,
  },
  {
    id: 2,
    code: 'COHORT-2024-ND01',
    name: 'NodeJS Batch 01',
    technology: 'NodeJS',
    trainer: 'Priya Sharma',
    startDate: '01-Mar-2024',
    endDate: '31-Aug-2024',
    isOngoing: true,
  },
  {
    id: 3,
    code: 'COHORT-2024-PY01',
    name: 'Python Batch 01',
    technology: 'Python',
    trainer: 'Ravi Kumar',
    startDate: '15-Apr-2024',
    endDate: '15-Oct-2024',
    isOngoing: true,
  },
  {
    id: 4,
    code: 'COHORT-2023-AJ01',
    name: 'Angular Batch 01',
    technology: 'Angular',
    trainer: 'Neha Gupta',
    startDate: '01-Jul-2023',
    endDate: '31-Dec-2023',
    isOngoing: false,
  },
]

function App() {
  return (
    <div className="container">
      <h1>Cohort Details</h1>
      <p className="legend">
        <span className="green-text">■ Green = Ongoing</span> &nbsp;
        <span className="blue-text">■ Blue = Completed</span>
      </p>
      <div className="cohorts-wrapper">
        {cohorts.map((cohort) => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  )
}

export default App
