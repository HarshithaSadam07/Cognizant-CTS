import React from 'react'

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'David Thomas', genre: 'Programming' },
  { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson', genre: 'JavaScript' },
]

function BookDetails({ showAll }) {
  // Conditional rendering: show all books OR only Programming genre
  const displayBooks = showAll ? books : books.filter(b => b.genre === 'Programming')

  return (
    <div className="detail-section">
      <h2>📚 Book Details</h2>
      {/* Conditional rendering using ternary */}
      {displayBooks.length === 0 ? (
        <p>No books to display.</p>
      ) : (
        // List rendering with keys
        <ul className="item-list">
          {displayBooks.map((book) => (
            <li key={book.id} className="item-card book-card">
              <strong>{book.title}</strong>
              <span>{book.author}</span>
              <span className="tag">{book.genre}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookDetails
