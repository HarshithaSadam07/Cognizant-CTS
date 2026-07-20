import React from 'react'

// CalculateScore component accepts name, school, total, goal as props
function CalculateScore({ name, school, total, goal }) {
  // Calculate score percentage
  const percentage = ((goal / total) * 100).toFixed(2)

  // Determine grade based on percentage
  const getGrade = (pct) => {
    if (pct >= 90) return { grade: 'A+', color: '#27ae60' }
    if (pct >= 80) return { grade: 'A', color: '#2ecc71' }
    if (pct >= 70) return { grade: 'B', color: '#3498db' }
    if (pct >= 60) return { grade: 'C', color: '#f39c12' }
    if (pct >= 50) return { grade: 'D', color: '#e67e22' }
    return { grade: 'F', color: '#e74c3c' }
  }

  const { grade, color } = getGrade(Number(percentage))

  return (
    <div className="card">
      <h2 className="student-name">{name}</h2>
      <table className="details-table">
        <tbody>
          <tr>
            <td className="label">School</td>
            <td className="value">{school}</td>
          </tr>
          <tr>
            <td className="label">Total Marks</td>
            <td className="value">{total}</td>
          </tr>
          <tr>
            <td className="label">Marks Obtained</td>
            <td className="value">{goal}</td>
          </tr>
          <tr>
            <td className="label">Percentage</td>
            <td className="value" style={{ color }}>{percentage}%</td>
          </tr>
          <tr>
            <td className="label">Grade</td>
            <td className="value grade" style={{ color }}>{grade}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CalculateScore
