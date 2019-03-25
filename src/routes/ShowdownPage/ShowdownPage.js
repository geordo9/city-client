import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import CityApiService from '../../services/city-api-service'
import ShowdownApiService from '../../services/showdown-api-service'
import { Hyph, Section, Button } from '../../components/Utils/Utils'
import './ShowdownPage.css'

export default class ShowdownPage extends Component {

  static contextType = UserContext

  componentDidMount() {
    const { userId, showdownId } = this.props.match.params
    console.log('component mounting')
    this.context.clearError()
    CityApiService.getUser(userId)
      .then(this.context.setUser)
      .catch(this.context.setError)
    ShowdownApiService.getShowdown(showdownId)
      .then(this.context.setShowdown)
      .catch(this.context.setError)
  }

  handleDeleteShowdown = (e) => {
    const { location, history } = this.props;
    const { userId, showdownId } = this.props.match.params
    ShowdownApiService.deleteShowdown(showdownId)
      .then(this.context.deleteShowdown)
      .then(history.push(`/user/${userId}`))
  }


  renderShowdown() {
    const { user, showdown } = this.context
    const { userId } = this.props.match.params
    return <>
      <h2><Link to={`/user/${userId}`}>{user.user_name}'s</Link> {UserBaseballSwitch(showdown.user_baseball_team)}</h2>
      <h2>VS.</h2>
      <h3>{UserBaseballSwitch(showdown.opp_baseball_team)}</h3>
      <h4>Playoff Record: {showdown.user_total_wins} <Hyph /> {showdown.user_total_loses}</h4>
      <p>Created On: {showdown.date_created}</p>
      <Button onClick={() => this.handleDeleteShowdown(showdown.id)}>DELETE SHOWDOWN</Button>
      <Button>
        <Link to='/create'>
        CREATE NEW SHOWDOWN
        </Link>
      </Button>
    </>
  }

  render() {
    const { error, showdown } = this.context
    let content
    if (error) {
      content = (error.error === `Showdown doesn't exist`)
        ? <p className='red'>Showdown not found</p>
        : <p className='red'>There was an error</p>}
    // } else if (!showdown.id) {
    //   content = <div className='loading' />
    // } 
    else {
      content = this.renderShowdown()
    }
    return (
      <Section className='ShowdownPage'>
        {content}
      </Section>
    )
  }
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