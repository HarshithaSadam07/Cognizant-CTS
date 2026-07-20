import React, { useState } from 'react'
import GitClient from '../services/GitClient'

function RepoList() {
  const [username, setUsername] = useState('techiesyed')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  const fetchRepos = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setRepos([])
    setSearched(true)

    try {
      const repoNames = await GitClient.getRepositories(username)
      setRepos(repoNames)
    } catch (err) {
      setError('Could not fetch repositories. Check the username and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="repo-wrapper">
      <form onSubmit={fetchRepos} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">🔍 Fetch Repos</button>
      </form>

      {loading && <p className="loading">⏳ Fetching repositories...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && searched && repos.length === 0 && !error && (
        <p className="no-repos">No repositories found for "{username}".</p>
      )}

      {repos.length > 0 && (
        <div className="repos-section">
          <h3>
            📦 {repos.length} Repositories for <span className="username">{username}</span>
          </h3>
          <ul className="repo-list">
            {repos.map((name, index) => (
              <li key={index} className="repo-item">
                <span className="repo-index">#{index + 1}</span>
                <a
                  href={`https://github.com/${username}/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RepoList
