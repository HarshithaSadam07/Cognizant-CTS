import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    if (activePage === 'home') return <Home />
    if (activePage === 'about') return <About />
    if (activePage === 'contact') return <Contact />
  }

  return (
    <div>
      <nav className="navbar">
        <h1>Student Management Portal</h1>
        <div className="nav-links">
          <button
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
          <button
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => setActivePage('about')}
          >
            About
          </button>
          <button
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => setActivePage('contact')}
          >
            Contact
          </button>
        </div>
      </nav>
      <main>{renderPage()}</main>
    </div>
  )
}

export default App
