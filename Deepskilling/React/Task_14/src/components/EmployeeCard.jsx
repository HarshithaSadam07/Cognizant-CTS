import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

// EmployeeCard consumes ThemeContext directly — no prop drilling
function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext)

  return (
    <div className={`employee-card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
      <div className="emp-avatar">{employee.name.charAt(0)}</div>
      <div className="emp-info">
        <h3>{employee.name}</h3>
        <p>{employee.role}</p>
        <p>{employee.department}</p>
      </div>
      <button className={`theme-btn ${theme === 'dark' ? 'dark-btn' : 'light-btn'}`}>
        {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  )
}

export default EmployeeCard
