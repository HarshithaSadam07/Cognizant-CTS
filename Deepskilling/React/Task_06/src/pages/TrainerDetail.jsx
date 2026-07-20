import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TrainersMock from '../data/TrainersMock'

function TrainerDetail() {
  // useParams to read the :id from the URL
  const { id } = useParams()
  const trainer = TrainersMock.find((t) => t.id === Number(id))

  if (!trainer) {
    return (
      <div className="page">
        <h2>Trainer not found</h2>
        <Link to="/trainers" className="btn">Back to List</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <h2>Trainer Details</h2>
      <div className="detail-card">
        <div className="avatar">{trainer.name.charAt(0)}</div>
        <table className="detail-table">
          <tbody>
            <tr><td className="label">Name</td><td>{trainer.name}</td></tr>
            <tr><td className="label">Technology</td><td>{trainer.technology}</td></tr>
            <tr><td className="label">Experience</td><td>{trainer.experience} years</td></tr>
            <tr><td className="label">Email</td><td>{trainer.email}</td></tr>
            <tr><td className="label">Location</td><td>{trainer.location}</td></tr>
          </tbody>
        </table>
      </div>
      <Link to="/trainers" className="btn back-btn">← Back to Trainers</Link>
    </div>
  )
}

export default TrainerDetail
