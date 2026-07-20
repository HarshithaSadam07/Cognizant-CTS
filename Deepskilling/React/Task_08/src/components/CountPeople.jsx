import React, { Component } from 'react'

class CountPeople extends Component {
  constructor(props) {
    super(props)
    // State with entrycount and exitcount
    this.state = {
      entrycount: 0,
      exitcount: 0,
    }
  }

  // Login button increments entrycount
  handleLogin = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1,
    }))
  }

  // Exit button increments exitcount
  handleExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1,
    }))
  }

  render() {
    const { entrycount, exitcount } = this.state
    const insideCount = entrycount - exitcount

    return (
      <div className="counter-box">
        <h2>People Counter</h2>

        <div className="stats">
          <div className="stat-card entry">
            <span className="stat-number">{entrycount}</span>
            <span className="stat-label">Total Entries</span>
          </div>
          <div className="stat-card inside">
            <span className="stat-number">{insideCount < 0 ? 0 : insideCount}</span>
            <span className="stat-label">Inside Now</span>
          </div>
          <div className="stat-card exit">
            <span className="stat-number">{exitcount}</span>
            <span className="stat-label">Total Exits</span>
          </div>
        </div>

        <div className="buttons">
          <button className="btn-login" onClick={this.handleLogin}>
            🟢 Login (Entry)
          </button>
          <button className="btn-exit" onClick={this.handleExit}>
            🔴 Exit
          </button>
        </div>
      </div>
    )
  }
}

export default CountPeople
