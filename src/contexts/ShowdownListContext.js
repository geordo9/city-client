import React, { Component } from 'react'

const ShowdownListContext = React.createContext({
  thingList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setShowdownList: () => {},
})
export default ShowdownListContext

export class ThingListProvider extends Component {
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
      <ShowdownListContext.Provider value={value}>
        {this.props.children}
      </ShowdownListContext.Provider>
    )
  }
}
