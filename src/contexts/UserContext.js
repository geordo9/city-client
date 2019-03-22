import React, { Component } from 'react'

export const nullUser = {
  user_name: ' ',
  favorite_city: ' ',
  favorite_baseball: ' ',
}

export const nullShowdown = {
  total_user_wins: 0,
  total_user_loses: 0,
  user_baseball_team: ' ',
  opp_baseball_team: ' ',
  wins_baseball: 0,
  losses_baseball: 0,
}

const UserContext = React.createContext({
  user: nullUser,
  showdown: nullShowdown,
  showdowns: [],
  error: null,
  favorite_city: ' ',
  favorite_baseball: ' ',
  playoffs: {},
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
    showdown: nullShowdown,
    playoffs: {},
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

  setShowdown = showdown => {
    this.setState({ showdown })
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

  setCity = favorite_city => {
    this.setState({
      favorite_city
    })
  }

  setBaseball = favorite_baseball => {
    this.setState({
      favorite_baseball
    })
  }

  render() {
    const value = {
      user: this.state.user,
      showdowns: this.state.showdowns,
      showdown: this.state.showdown,
      playoffs: this.state.playoffs,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setShowdowns: this.setShowdowns,
      setShowdown: this.setShowdown,
      clearShowdowns: this.clearShowdowns,
      addShowdown: this.addShowdown,
      favorite_baseball: this.favorite_baseball,
      favorite_city: this.favorite_city
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

