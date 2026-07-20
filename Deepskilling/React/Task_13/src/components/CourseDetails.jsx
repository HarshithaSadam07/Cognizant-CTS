import React from 'react'

const courses = [
  { id: 1, title: 'ReactJS Fundamentals', level: 'Beginner', duration: '30 hrs' },
  { id: 2, title: 'Node.js Backend Development', level: 'Intermediate', duration: '40 hrs' },
  { id: 3, title: 'Full Stack MERN', level: 'Advanced', duration: '80 hrs' },
  { id: 4, title: 'Python for Data Science', level: 'Intermediate', duration: '50 hrs' },
]

// Helper function for conditional rendering with switch
const getLevelColor = (level) => {
  switch (level) {
    case 'Beginner': return '#27ae60'
    case 'Intermediate': return '#f39c12'
    case 'Advanced': return '#e74c3c'
    default: return '#3498db'
  }
}

function CourseDetails() {
  return (
    <div className="detail-section">
      <h2>🎓 Course Details</h2>
      {/* List rendering with keys */}
      <ul className="item-list">
        {courses.map((course) => (
          <li key={course.id} className="item-card course-card">
            <strong>{course.title}</strong>
            <span>Duration: {course.duration}</span>
            {/* Conditional inline style */}
            <span
              className="tag level-tag"
              style={{ backgroundColor: getLevelColor(course.level), color: 'white' }}
            >
              {course.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseDetails
