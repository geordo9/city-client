import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import CityApiService from '../../services/city-api-service'
import { Section, Button } from '../../components/Utils/Utils'
import './UserPage.css'

export default class ThingListPage extends Component {
  static contextType = UserContext

  componentDidMount() {
    const { userId } = this.props.match.params
    console.log(userId);
    this.context.clearError()
    //will need to write both of these functions in the Services
    CityApiService.getUser(userId)
      .then(this.context.setUser)
      .then(this.context.setError)
    // CityApiService.getCityWithUserId(userId)
    //   .then(this.context.setCity)
    //   .then(this.context.setError)
    // CityApiService.getBaseballTeam(this.context.user)
    //   .then(this.context.setBaseball)
    //   .then(this.context.setError)
    // CityApiService.getUserShowdowns()
    //   .then(this.context.setShowdowns)
    //   .catch(this.context.setError)
  }

  renderUser() {
    const { user, showdowns, favorite_city } = this.context

    return <>
      <h2>{user.user_name}</h2>
      <UserCity user={user} />
      <UserBaseball user={user} />
      <UserShowdowns showdowns={showdowns} />
      <Button className='UserPage__create-new-showdown'>CREATE NEW SHOWDOWN</Button>
    </>
  }

  render() {
    const { error, user } = this.context
    let content
    if (error) {
      content = (error.error === `User doesn't exist`)
        ? <p className='red'>User not found</p>
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

function UserCity({user}) {
  return (
    <h3>Favorite City: {UserCitySwitch(user.favorite_city)}</h3>
  )
}

function UserCitySwitch(cityId) {
  switch (cityId) {
    case 1:
      return 'Atlanta'
    case 2:
      return 'Baltimore'
    case 3:
      return 'Boston'
    case 4:
      return 'Chicago'
    case 5:
      return 'Cincinnati'
    case 6:
      return 'Cleveland'
    case 7:
      return 'Detroit'
    case 8:
      return 'Dallas'
    case 9:
      return 'Denver'
    case 10:
      return 'Houston'
    case 11:
      return 'Kansas City'
    case 12:
      return 'Los Angeles'
    case 13:
      return 'Miami'
    case 14:
      return 'Milwaukee'
    case 15:
      return 'Minnesota'
    case 16:
      return 'New York'
    case 17:
      return 'Oakland'
    case 18:
      return 'Philadelphia'
    case 19:
      return 'Phoneix'
    case 20:
      return 'Pittsburgh'
    case 21:
      return 'Saint Louis'
    case 22:
      return 'San Diego'
    case 23:
      return 'San Francisco'
    case 24:
      return 'Seattle'
    case 25:
      return 'Tampa Bay'
    case 26:
      return 'Toronto'
    case 27:
      return 'Washington'
    default:
      return 'No Favorite City. Something is wrong'
  }
}

function UserBaseball({user}) {
  return (
    <ul className='UserPage__teams'>
      <p className='UserPage__baseball'>
        Favorite Baseball Team: {UserBaseballSwitch(user.favorite_baseball)}
      </p>
    </ul>
  )
}

function UserBaseballSwitch(baseballId) {
  switch (baseballId) {
    case 1:
      return 'Atlanta Braves'
    case 2:
      return 'Miami Marlins'
    case 3:
      return 'New York Mets'
    case 4:
      return 'Washington Nationals'
    case 5:
      return 'Philadelphia Phillies'
    case 6:
      return 'Chicago Cubs'
    case 7:
      return 'Cincinnati Reds'
    case 8:
      return 'Pittsburgh Pirates'
    case 9:
      return 'St. Louis Cardinals'
    case 10:
      return 'Milwaukee Brewers'
    case 11:
      return 'Arizona Diamondbacks'
    case 12:
      return 'Los Angeles Dodgers'
    case 13:
      return 'Colorado Rockies'
    case 14:
      return 'San Francisco Giants'
    case 15:
      return 'San Diego Padres'
    case 16:
      return 'Boston Red Sox'
    case 17:
      return 'Baltimore Orioles'
    case 18:
      return 'New York Yankees'
    case 19:
      return 'Tampa Bay Rays'
    case 20:
      return 'Toronto Blue Jays'
    case 21:
      return 'Chicago White Sox'
    case 22:
      return 'Kansas City Royals'
    case 23:
      return 'Detroit Tigers'
    case 24:
      return 'Minnesota Twins'
    case 25:
      return 'Cleveland Indians'
    case 26:
      return 'Los Angeles Angels'
    case 27:
      return 'Houston Astros'
    case 28:
      return 'Oakland Athletics'
    case 29:
      return 'Seattle Mariners'
    case 30:
      return 'Texas Rangers'
    default:
      return 'No Baseball Team Selected'
  }
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