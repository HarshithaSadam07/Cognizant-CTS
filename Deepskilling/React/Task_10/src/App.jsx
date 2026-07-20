import React from 'react'

// List of office objects with Name, Rent, Address
const offices = [
  { id: 1, Name: 'Prestige Tower', Rent: 45000, Address: '12 MG Road, Bangalore' },
  { id: 2, Name: 'Skyline Business Park', Rent: 75000, Address: '5 Anna Salai, Chennai' },
  { id: 3, Name: 'Cyber Pearl', Rent: 55000, Address: '8 HITEC City, Hyderabad' },
  { id: 4, Name: 'Nariman Point Office', Rent: 110000, Address: '3 Nariman Point, Mumbai' },
  { id: 5, Name: 'DLF Cybercity', Rent: 38000, Address: '22 Sector 25, Gurugram' },
  { id: 6, Name: 'Express Trade Tower', Rent: 82000, Address: '15 Sector 132, Noida' },
]

function App() {
  return (
    <div className="container">
      {/* Heading using JSX */}
      <h1>🏢 Office Space Rental</h1>
      <p className="subtitle">Find your perfect workspace</p>

      {/* Office image using JSX */}
      <div className="office-image">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" width="300" height="180">
          <rect x="10" y="20" width="180" height="90" fill="#bdc3c7" rx="4" />
          <rect x="20" y="10" width="160" height="100" fill="#ecf0f1" rx="4" />
          <rect x="30" y="30" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="70" y="30" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="110" y="30" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="150" y="30" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="30" y="70" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="70" y="70" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="110" y="70" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="150" y="70" width="30" height="30" fill="#3498db" rx="2" />
          <rect x="85" y="85" width="30" height="25" fill="#7f8c8d" rx="2" />
        </svg>
        <p className="img-caption">Premium Office Spaces</p>
      </div>

      {/* Office list using map */}
      <div className="offices-grid">
        {offices.map((office) => (
          <div key={office.id} className="office-card">
            <h3>{office.Name}</h3>
            <p className="address">📍 {office.Address}</p>
            {/* Rent below 60000 = red, above 60000 = green */}
            <p
              className="rent"
              style={{ color: office.Rent < 60000 ? '#e74c3c' : '#27ae60' }}
            >
              ₹{office.Rent.toLocaleString()} / month
            </p>
            <span
              className="rent-badge"
              style={{
                background: office.Rent < 60000 ? '#fdecea' : '#e8f5e9',
                color: office.Rent < 60000 ? '#e74c3c' : '#27ae60',
              }}
            >
              {office.Rent < 60000 ? 'Budget Friendly' : 'Premium'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
