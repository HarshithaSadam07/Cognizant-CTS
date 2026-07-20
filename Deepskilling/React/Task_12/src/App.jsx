import React, { useState } from 'react'
import GuestPage from './components/GuestPage'
import UserPage from './components/UserPage'

function App() {
  // isLoggedIn drives conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="container">
      <header className="header">
        <h1>🎫 Flight Ticket Booking</h1>
        <div className="auth-btns">
          {/* Show Login button to guest, Logout to logged-in user */}
          {!isLoggedIn ? (
            <button className="btn-login" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          ) : (
            <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Conditional rendering: guest vs user */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  )
}

export default App
