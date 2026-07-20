import React from 'react'

// T20 Players
const T20Players = ['Rohit Sharma', 'Virat Kohli', 'KL Rahul', 'Hardik Pandya', 'Suryakumar Yadav']

// Ranji Trophy Players
const RanjiTrophyPlayers = ['Shubman Gill', 'Cheteshwar Pujara', 'Ajinkya Rahane', 'Sarfaraz Khan', 'Ruturaj Gaikwad']

function IndianPlayers() {
  // Destructuring: separate odd and even indexed players from T20Players
  const [first, second, third, fourth, fifth] = T20Players
  const oddTeam = [first, third, fifth]   // index 0, 2, 4 (odd position: 1st, 3rd, 5th)
  const evenTeam = [second, fourth]       // index 1, 3 (even position: 2nd, 4th)

  // Spread operator: merge T20Players and RanjiTrophyPlayers
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers]

  return (
    <div className="section">
      <h2>Indian Players</h2>

      <div className="teams-row">
        <div className="team-box">
          <h3>Team Odd (1st, 3rd, 5th)</h3>
          <ul>
            {oddTeam.map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
        <div className="team-box">
          <h3>Team Even (2nd, 4th)</h3>
          <ul>
            {evenTeam.map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
      </div>

      <h3 className="sub-heading">Combined Squad (T20 + Ranji — Spread Operator)</h3>
      <ul className="combined-list">
        {allPlayers.map((name, i) => (
          <li key={i}>
            <span className={i < T20Players.length ? 'badge-t20' : 'badge-ranji'}>
              {i < T20Players.length ? 'T20' : 'Ranji'}
            </span>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndianPlayers
