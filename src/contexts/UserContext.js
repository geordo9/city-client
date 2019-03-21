import React, { Component } from 'react'

export const nullUser = {
  user_name: ' ',
  favorite_city: ' ',
  favorite_baseball: ' ',
}

const UserContext = React.createContext({
  user: nullUser,
  showdowns: [],
  error: null,
  favorite_city: ' ',
  favorite_baseball: ' ',
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setShowdowns: this.setShowdowns,
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

