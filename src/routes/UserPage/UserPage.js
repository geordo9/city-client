import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import CityApiService from '../../services/city-api-service'
import { Section } from '../../components/Utils/Utils'
import './UserPage.css'

export default class ThingListPage extends Component {
  static contextType = UserContext

  componentDidMount() {
    const { userId } = this.props.match.params
    this.context.clearError()
    //will need to write both of these functions in the Services
    CityApiService.getUser(userId)
      .then(this.context.setUser)
      .then(this.context.setError)
    CityApiService.getUserShowdowns()
      .then(this.context.setShowdowns)
      .catch(this.context.setError)
  }

  renderUser() {
    const { user, showdowns } = this.context
    return <>
      <h2>{user.user_name}</h2>
      <UserFavorites thing={user} />
      <UserShowdowns showdowns={showdowns} />
      
    </>
  }

  render() {
    const { error, user } = this.context
    let content
    if (error) {
      content = (error.error === `Thing doesn't exist`)
        ? <p className='red'>Thing not found</p>
        : <p className='red'>There was an error</p>
    } else if (!user.id) {
      content = <div className='loading' />
    } else {
      content = this.renderUser()
    }
    return (
      <Section className='UserPage'>
        {content}
      </Section>
    )
  }
}

function UserFavorites({user}) {

}

function UserShowdowns({ showdowns = [] }) {
  return (
    <ul className='UserPage__showdowns'>
      {showdowns.map(showdown =>
        <li key={showdown.id} className='UserPage__showdown'>
          <p className='UserPage__showdown-title'>
            {showdown.title}
          </p>
          <p className='ThingPage__review-user'>
            {showdown.date_created}
          </p>
        </li>
      )}
    </ul>
  )
}
