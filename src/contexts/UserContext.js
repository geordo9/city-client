import React, { Component } from 'react'

export const nullUser = {
  user_name: ' ',
  favorite_city: ' ',
  favorite_teams: [],
}

const UserContext = React.createContext({
  user: nullUser,
  showdowns: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearShowdowns: () => {},
  setReviews: () => {},
  addShowdown: () => {},
})

export default UserContext

export class UserProvider extends Component {
  state = {
    user: nullUser,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }

  setShowdowns = showdowns => {
    this.setState({ showdowns })
  }

  clearShowdowns = () => {
    this.setShowdowns([])
  }

  addShowdown = showdown => {
    this.setShowdowns([
      ...this.state.showdowns,
      showdown
    ])
  }

  render() {
    const value = {
      user: this.state.user,
      showdowns: this.state.showdowns,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setShowdowns: this.setShowdowns,
      clearShowdowns: this.clearShowdowns,
      addShowdown: this.addShowdown,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

