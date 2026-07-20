import React, { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import EmployeeList from './components/EmployeeList'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    // Wrap with ThemeContext Provider — provides theme to all children
    <ThemeContext.Provider value={theme}>
      <div className={`app-wrapper ${theme === 'dark' ? 'dark-app' : 'light-app'}`}>
        <header className="app-header">
          <h1>👥 Employee Directory</h1>
          <button className="toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
          </button>
        </header>
        <p className="context-info">
          Current Theme: <strong>{theme}</strong> (via Context API — no prop drilling)
        </p>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
