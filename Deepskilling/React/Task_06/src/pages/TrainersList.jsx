import React from 'react'
import { Link } from 'react-router-dom'
import TrainersMock from '../data/TrainersMock'

function TrainersList() {
  return (
    <div className="page">
      <h2>All Trainers</h2>
      <table className="trainers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Technology</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {TrainersMock.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>
                {/* Trainer names are clickable links */}
                <Link to={`/trainer/${trainer.id}`} className="trainer-link">
                  {trainer.name}
                </Link>
              </td>
              <td>{trainer.technology}</td>
              <td>{trainer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrainersList
