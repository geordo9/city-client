import React, { Component } from 'react'
import ThingListContext from '../../contexts/ThingListContext'
import CityApiService from '../../services/city-api-service'
import { Section } from '../../components/Utils/Utils'
import ThingListItem from '../../components/ThingListItem/ThingListItem'
import './UserPage.css'

export default class ThingListPage extends Component {
  static contextType = ThingListContext

  componentDidMount() {
    this.context.clearError()
    // CityApiService.getShowdowns() need to write this
      // .then(this.context.setShowdownList)
      .catch(this.context.setError)
  }

  renderShowdowns() {
    const { showdownList = [] } = this.context
    return showdownList.map(showdown =>
        console.log('List will go here')
        // <h2>{showdown.title}</h2>
        // <h3>Date Created: {showdown.date_created}</h3>
    );
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ThingListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderShowdowns()}
      </Section>
    )
  }
}
