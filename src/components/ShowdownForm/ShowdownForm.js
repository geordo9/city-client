import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import CityApiService from '../../services/city-api-service'
import ShowdownApiService from '../../services/showdown-api-service';
import UserContext from '../../contexts/UserContext';

export default class ShowdownForm extends Component {
  static defaultProps = {
    onCreationSuccess: () => {}
  }

  state = { 
    error: null, 
    playoffs: {}
  }

   setPlayoffs = playoffs => {
    this.setState({ playoffs })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_baseball_team, opp_baseball_team } = ev.target

    this.setState({error: null})
    ShowdownApiService.postShowdown({
      user_baseball_team: Number(user_baseball_team.value),
      opp_baseball_team: Number(opp_baseball_team.value),
    })
      .then(user => {
        user_baseball_team.value = ''
        opp_baseball_team.value = ''
        this.props.onCreationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  
  }

  render() {
    const { error } = this.state
    // console.log(this.props.props.match.params)
    return (
      <form
        className='ShowdownForm'
        onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_baseball_team'>
          <label htmlFor='ShowdownForm__user_baseball_team'>
            Select Your Team
          </label>
          <select name='user_baseball_team' required id='RegistrationForm__user_baseball_team'>
            <option value = '1'>Atlanta Braves</option>
            <option value = '2'>Miami Marlins</option>
            <option value = '3'>New York Mets</option>
            <option value = '4'>Washington Nationals</option>
            <option value = '5'>Philadelphia</option>
            <option value = '6'>Chicago Cubs</option>
            <option value = '7'>Cincinnati Reds</option>
            <option value = '8'>Pittsburgh Pirates</option>
            <option value = '9'>St. Louis Cardinals</option>
            <option value = '10'>Milwaukee Brewers</option>
            <option value = '11'>Arizona Diamondbacks</option>
            <option value = '12'>Los Angeles Dodgers</option>
            <option value = '13'>Colorado Rockies</option>
            <option value = '14'>San Francisco Giants</option>
            <option value = '15'>San Diego Padres</option>
            <option value = '16'>Boston Red Sox</option>
            <option value = '17'>Baltimore Orioles</option>
            <option value = '18'>New York Yankees</option>
            <option value = '19'>Tampa Bay Rays</option>
            <option value = '20'>Toronto Blue Jays</option>
            <option value = '21'>Chicago White Sox</option>
            <option value = '22'>Kansas City Royals</option>
            <option value = '23'>Detroit Tigers</option>
            <option value = '24'>Minnesota Twins</option>
            <option value = '25'>Cleveland Indians</option>
            <option value = '26'>Los Angeles Angels</option>
            <option value = '27'>Houston Astros</option>
            <option value = '28'>Oakland Athletics</option>
            <option value = '29'>Seattle Mariners</option>
            <option value = '30'>Texas Rangers</option>
          </select>
        </div>
        <div className='opp_baseball_team'>
          <label htmlFor='ShowdownForm__opp_baseball_team'>
            Select Your Opponent
          </label>
          <select name='opp_baseball_team' required id='RegistrationForm__opp_baseball_team'>
            <option value = '1'>Atlanta Braves</option>
            <option value = '2'>Miami Marlins</option>
            <option value = '3'>New York Mets</option>
            <option value = '4'>Washington Nationals</option>
            <option value = '5'>Philadelphia</option>
            <option value = '6'>Chicago Cubs</option>
            <option value = '7'>Cincinnati Reds</option>
            <option value = '8'>Pittsburgh Pirates</option>
            <option value = '9'>St. Louis Cardinals</option>
            <option value = '10'>Milwaukee Brewers</option>
            <option value = '11'>Arizona Diamondbacks</option>
            <option value = '12'>Los Angeles Dodgers</option>
            <option value = '13'>Colorado Rockies</option>
            <option value = '14'>San Francisco Giants</option>
            <option value = '15'>San Diego Padres</option>
            <option value = '16'>Boston Red Sox</option>
            <option value = '17'>Baltimore Orioles</option>
            <option value = '18'>New York Yankees</option>
            <option value = '19'>Tampa Bay Rays</option>
            <option value = '20'>Toronto Blue Jays</option>
            <option value = '21'>Chicago White Sox</option>
            <option value = '22'>Kansas City Royals</option>
            <option value = '23'>Detroit Tigers</option>
            <option value = '24'>Minnesota Twins</option>
            <option value = '25'>Cleveland Indians</option>
            <option value = '26'>Los Angeles Angels</option>
            <option value = '27'>Houston Astros</option>
            <option value = '28'>Oakland Athletics</option>
            <option value = '29'>Seattle Mariners</option>
            <option value = '30'>Texas Rangers</option>
          </select>
        </div>
        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}

