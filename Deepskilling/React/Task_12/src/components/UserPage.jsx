import React, { useState } from 'react'

const flights = [
  { id: 1, from: 'Chennai', to: 'Delhi', date: '20-Jul-2024', price: '₹4,500' },
  { id: 2, from: 'Bangalore', to: 'Mumbai', date: '22-Jul-2024', price: '₹3,200' },
  { id: 3, from: 'Hyderabad', to: 'Kolkata', date: '25-Jul-2024', price: '₹5,100' },
]

function UserPage() {
  const [booked, setBooked] = useState(null)

  const handleBook = (flight) => {
    setBooked(flight)
  }

  return (
    <div className="page-content user-page">
      <h2>✈️ Book Your Flight</h2>
      <p className="note">Welcome, <strong>User</strong>! Select a flight to book.</p>
      <table className="flights-table">
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.date}</td>
              <td>{flight.price}</td>
              <td>
                <button className="book-btn" onClick={() => handleBook(flight)}>
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {booked && (
        <div className="booking-confirm">
          <h3>✅ Booking Confirmed!</h3>
          <p>
            {booked.from} → {booked.to} on {booked.date} | {booked.price}
          </p>
        </div>
      )}
    </div>
  )
}

export default UserPage
