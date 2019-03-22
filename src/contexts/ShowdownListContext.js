import React, { Component } from 'react'

const ShowdownContext = React.createContext({
  thingList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setShowdownList: () => {},
})
export default ShowdownContext

export class ShowdownProvider extends Component {
  state = {
    showdownList: [],
    error: null,
  };

  setShowdownList = showdownList => {
    this.setState({ showdownList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      showdownList: this.state.showdownList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setShowdownList: this.setShowdownList,
    }
    return (
      <ShowdownContext.Provider value={value}>
        {this.props.children}
      </ShowdownContext.Provider>
    )
  }
}
