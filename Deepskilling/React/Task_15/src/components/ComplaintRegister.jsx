import React, { useState } from 'react'

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('')
  const [complaint, setComplaint] = useState('')
  const [submittedTickets, setSubmittedTickets] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Generate random reference number
    const refNumber = 'TKT-' + Math.floor(100000 + Math.random() * 900000)

    // Show alert with reference number
    alert(`Complaint registered successfully!\nReference Number: ${refNumber}`)

    // Add to submitted tickets list
    setSubmittedTickets((prev) => [
      { id: refNumber, name: employeeName, complaint },
      ...prev,
    ])

    // Reset form
    setEmployeeName('')
    setComplaint('')
  }

  return (
    <div className="register-wrapper">
      <div className="form-card">
        <h2>🎫 Raise a Complaint</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="empName">Employee Name</label>
            <input
              id="empName"
              type="text"
              placeholder="Enter your name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="complaint">Complaint</label>
            <textarea
              id="complaint"
              placeholder="Describe your complaint here..."
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              rows={5}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Complaint
          </button>
        </form>
      </div>

      {submittedTickets.length > 0 && (
        <div className="tickets-list">
          <h3>Submitted Tickets</h3>
          {submittedTickets.map((ticket) => (
            <div key={ticket.id} className="ticket-item">
              <p><strong>Ref:</strong> {ticket.id}</p>
              <p><strong>Employee:</strong> {ticket.name}</p>
              <p><strong>Complaint:</strong> {ticket.complaint}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ComplaintRegister
