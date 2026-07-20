import React, { Component } from 'react'

class Getuser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true,
      error: null,
    }
  }

  // Async componentDidMount to fetch user from random user API
  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/?results=6')
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      this.setState({ users: data.results, loading: false })
    } catch (err) {
      this.setState({ error: err.message, loading: false })
    }
  }

  render() {
    const { users, loading, error } = this.state

    if (loading) {
      return <div className="loading">⏳ Loading users...</div>
    }

    if (error) {
      return <div className="error">❌ Error: {error}</div>
    }

    return (
      <div className="users-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            {/* Display user image */}
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-img"
            />
            {/* Display title and first name */}
            <h3>
              {user.name.title}. {user.name.first} {user.name.last}
            </h3>
            <p>📍 {user.location.city}, {user.location.country}</p>
            <p>✉️ {user.email}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Getuser
