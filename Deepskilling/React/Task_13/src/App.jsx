import React, { useState } from 'react'
import BookDetails from './components/BookDetails'
import BlogDetails from './components/BlogDetails'
import CourseDetails from './components/CourseDetails'

function App() {
  const [showAllBooks, setShowAllBooks] = useState(true)

  return (
    <div className="container">
      <h1>📖 Blogger App</h1>

      <div className="toggle-row">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={showAllBooks}
            onChange={() => setShowAllBooks(!showAllBooks)}
          />
          &nbsp; Show All Books (uncheck for Programming only)
        </label>
      </div>

      <div className="sections-wrapper">
        <BookDetails showAll={showAllBooks} />
        <BlogDetails />
        <CourseDetails />
      </div>
    </div>
  )
}

export default App
