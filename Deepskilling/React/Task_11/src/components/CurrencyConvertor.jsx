import React, { useState } from 'react'

// 1 INR = 0.011 EUR (approximate)
const INR_TO_EUR = 0.011

function CurrencyConvertor() {
  const [inrValue, setInrValue] = useState('')
  const [eurValue, setEurValue] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const eur = (parseFloat(inrValue) * INR_TO_EUR).toFixed(2)
    setEurValue(eur)
  }

  return (
    <div className="section">
      <h2>Currency Convertor</h2>
      <p>Indian Rupees (₹) → Euro (€)</p>
      <form onSubmit={handleSubmit} className="convertor-form">
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={inrValue}
          onChange={(e) => setInrValue(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {eurValue !== null && (
        <p className="result">
          ₹{parseFloat(inrValue).toLocaleString()} = <strong>€{eurValue}</strong>
        </p>
      )}
    </div>
  )
}

export default CurrencyConvertor
