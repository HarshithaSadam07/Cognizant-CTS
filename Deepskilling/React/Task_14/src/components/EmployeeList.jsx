import React from 'react'
import EmployeeCard from './EmployeeCard'

const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', department: 'Engineering' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', department: 'Engineering' },
  { id: 3, name: 'Carol White', role: 'UI/UX Designer', department: 'Design' },
  { id: 4, name: 'David Brown', role: 'Project Manager', department: 'Management' },
]

// EmployeeList does NOT pass theme as props — no prop drilling
function EmployeeList() {
  return (
    <div className="employee-list">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  )
}

export default EmployeeList
