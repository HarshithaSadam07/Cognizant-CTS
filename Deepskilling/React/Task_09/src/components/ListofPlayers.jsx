import React from 'react'

// 11 players with scores
const players = [
  { id: 1, name: 'Rohit Sharma', score: 89 },
  { id: 2, name: 'Shubman Gill', score: 65 },
  { id: 3, name: 'Virat Kohli', score: 120 },
  { id: 4, name: 'KL Rahul', score: 45 },
  { id: 5, name: 'Hardik Pandya', score: 67 },
  { id: 6, name: 'Ravindra Jadeja', score: 38 },
  { id: 7, name: 'MS Dhoni', score: 72 },
  { id: 8, name: 'Jasprit Bumrah', score: 12 },
  { id: 9, name: 'Mohammed Shami', score: 55 },
  { id: 10, name: 'Kuldeep Yadav', score: 25 },
  { id: 11, name: 'Yuzvendra Chahal', score: 8 },
]

function ListofPlayers() {
  // ES6 map to list all players
  // ES6 arrow function to filter players with score below 70
  const lowScorers = players.filter((player) => player.score < 70)

  return (
    <div className="section">
      <h2>All Players & Scores</h2>
      <table className="player-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className={player.score < 70 ? 'low-score' : 'high-score'}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="sub-heading">Players with Score Below 70</h3>
      <ul className="low-list">
        {lowScorers.map((player) => (
          <li key={player.id}>
            {player.name} — <strong>{player.score}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListofPlayers
