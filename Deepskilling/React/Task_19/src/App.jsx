import React from 'react'
import RepoList from './components/RepoList'

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>🐙 GitHub Repository Client</h1>
        <p>Search any GitHub user's repositories using the GitHub API</p>
      </header>
      <RepoList />
    </div>
  )
}

export default App
