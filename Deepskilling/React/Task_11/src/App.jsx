import React, { useState } from 'react'
import CurrencyConvertor from './components/CurrencyConvertor'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [syntheticMsg, setSyntheticMsg] = useState('')

  // Increment button calls multiple methods: increment value AND say hello
  const incrementValue = () => {
    setCount((prev) => prev + 1)
  }

  const sayHello = () => {
    setMessage('Hello! Counter incremented to ' + (count + 1))
  }

  const handleIncrement = () => {
    incrementValue()
    sayHello()
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
    setMessage('')
  }

  // Passing argument "welcome" to handler
  const sayWelcome = (greeting) => {
    setMessage(`You said: "${greeting}" 👋`)
  }

  // Synthetic event example
  const handleSyntheticClick = (e) => {
    setSyntheticMsg(`Synthetic Event: type="${e.type}", target="${e.target.tagName}"`)
  }

  return (
    <div className="container">
      <h1>Event Handling Examples</h1>

      {/* Section 1: Counter with multiple method calls */}
      <div className="section">
        <h2>1. Counter (Multiple Methods on Click)</h2>
        <div className="counter-display">{count}</div>
        <div className="btn-row">
          <button className="btn-inc" onClick={handleIncrement}>
            ➕ Increment (+ Say Hello)
          </button>
          <button className="btn-dec" onClick={handleDecrement}>
            ➖ Decrement
          </button>
        </div>
        {message && <p className="msg-box">{message}</p>}
      </div>

      {/* Section 2: Passing argument to event handler */}
      <div className="section">
        <h2>2. Passing Argument to Handler</h2>
        <button
          className="btn-welcome"
          onClick={() => sayWelcome('welcome')}
        >
          Say Welcome
        </button>
        {message.startsWith('You said') && <p className="msg-box">{message}</p>}
      </div>

      {/* Section 3: Synthetic Event */}
      <div className="section">
        <h2>3. Synthetic Event</h2>
        <button className="btn-synthetic" onClick={handleSyntheticClick}>
          I was clicked
        </button>
        {syntheticMsg && <p className="msg-box">{syntheticMsg}</p>}
      </div>

      {/* Section 4: Currency Convertor */}
      <CurrencyConvertor />
    </div>
  )
}

export default App
