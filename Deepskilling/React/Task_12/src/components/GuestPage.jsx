import React from 'react'

const flights = [
  { id: 1, from: 'Chennai', to: 'Delhi', date: '20-Jul-2024', price: '₹4,500' },
  { id: 2, from: 'Bangalore', to: 'Mumbai', date: '22-Jul-2024', price: '₹3,200' },
  { id: 3, from: 'Hyderabad', to: 'Kolkata', date: '25-Jul-2024', price: '₹5,100' },
]

function GuestPage() {
  return (
    <div className="page-content guest-page">
      <h2>✈️ Available Flights</h2>
      <p className="note">You are viewing as a <strong>Guest</strong>. Login to book tickets.</p>
      <table className="flights-table">
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Price</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GuestPage
