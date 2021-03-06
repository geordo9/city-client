import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import ShowdownApiService from '../../services/showdown-api-service'
import { Hyph, Section, Button } from '../../components/Utils/Utils'
import moment from 'moment';
import './ShowdownPage.css'

export default class ShowdownPage extends Component {

  static contextType = UserContext

  componentDidMount() {
    const { showdownId } = this.props.match.params
    this.context.clearError()
    ShowdownApiService.getShowdown(showdownId)
      .then(this.context.setShowdown)
      .catch(this.context.setError)
  }

  handleDeleteShowdown = (e) => {
    const { history } = this.props;
    const { showdownId } = this.props.match.params
    ShowdownApiService.deleteShowdown(showdownId)
      .then(this.context.deleteShowdown(showdownId))
      .then(history.push(`/user`))
  }

  handleGoBackClicked = () => {
      const  { history } = this.props;
      history.goBack();
  }

  renderShowdown() {
    const { user, showdown } = this.context

    return <>
      <h2><Link to={`/user`} className='showdown_user'>{user.user_name}'s</Link> Squad</h2> 
      <h3>{UserBaseballSwitch(showdown.user_baseball_team)} <Hyph />VS.<Hyph /> {UserBaseballSwitch(showdown.opp_baseball_team)}</h3>
      <h4>Playoff Record: <span className='playoff_record'>{showdown.user_total_wins} <Hyph /> {showdown.user_total_loses}</span></h4>
      <p>Created On: {moment(showdown.date_created).format('MMMM Do YYYY')}</p>
      <section className='showdown_buttons'>
        <Button onClick={() => this.handleDeleteShowdown(showdown.id)} className='showdown_delete'>DELETE SHOWDOWN</Button>
        <Link to='/create' className='create_showdown'>
        CREATE NEW SHOWDOWN
        </Link>
        <Button onClick={() => this.handleGoBackClicked()} className='profile_button'>PROFILE PAGE</Button>
      </section>
    </>
  }

  render() {
    const { error } = this.context
    let content
    if (error) {
      content = (error.error === `Showdown doesn't exist`)
        ? <p className='red'>Showdown not found</p>
        : <p className='red'>There was an error</p>}

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