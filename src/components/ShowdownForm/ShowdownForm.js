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
    const { userId } = this.props.props.match.params //we're getting this from the token
    //everything here can go to the backend 
    CityApiService.getBaseballTeamPlayoffs(user_baseball_team.value)
      .then(this.setPlayoffs())
      .then()
    console.log(this.state)
    const { wins_baseball } = getBaseballWins( records, opp_baseball_team.value);
    console.log(wins_baseball)
    const { losses_baseball } = getBaseballLosses( records, opp_baseball_team.value);

    this.setState({error: null})
    ShowdownApiService.postShowdown({
      user_pin: userId,
      user_total_wins: wins_baseball,
      user_total_loses: losses_baseball,
      user_baseball_team,
      opp_baseball_team,
      wins_baseball,
      losses_baseball
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
    console.log(this.props.props.match.params)
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
          Register
        </Button>
      </form>
    )
  }
}

function getBaseballWins({playoffs}, opponent) {
  switch(opponent) {
    case 1:
      return playoffs.wins_atl
    case 2:
      return playoffs.wins_mia
    case 3:
      return playoffs.wins_nym
    case 4:
      return playoffs.wins_wsh
    case 5:
      return playoffs.wins_phi
    case 6:
      return playoffs.wins_chc
    case 7:
      return playoffs.wins_cin
    case 8:
      return playoffs.wins_pit
    case 9:
      return playoffs.wins_stl
    case 10:
      return playoffs.wins_mil
    case 11:
      return playoffs.wins_ari
    case 12:
      return playoffs.wins_lad
    case 13:
      return playoffs.wins_col
    case 14:
      return playoffs.wins_sf
    case 15:
      return playoffs.wins_sd
    case 16:
      return playoffs.wins_bos
    case 17:
      return playoffs.wins_bal
    case 18:
      return playoffs.wins_nyy
    case 19:
      return playoffs.wins_tb
    case 20:
      return playoffs.wins_tor
    case 21:
      return playoffs.wins_cws
    case 22:
      return playoffs.wins_kc
    case 23:
      return playoffs.wins_det
    case 24:
      return playoffs.wins_min
    case 25:
      return playoffs.wins_cle
    case 26:
      return playoffs.wins_laa
    case 27:
      return playoffs.wins_hou
    case 28:
      return playoffs.wins_oak
    case 29:
      return playoffs.wins_sea
    case 30:
      return playoffs.wins_tex
    default:
      return 0
  }

}

function getBaseballLosses({playoffs}, opponent) {
  switch(opponent) {
    case 1:
      return playoffs.losses_atl
    case 2:
      return playoffs.losses_mia
    case 3:
      return playoffs.losses_nym
    case 4:
      return playoffs.losses_wsh
    case 5:
      return playoffs.losses_phi
    case 6:
      return playoffs.losses_chc
    case 7:
      return playoffs.losses_cin
    case 8:
      return playoffs.losses_pit
    case 9:
      return playoffs.losses_stl
    case 10:
      return playoffs.losses_mil
    case 11:
      return playoffs.losses_ari
    case 12:
      return playoffs.losses_lad
    case 13:
      return playoffs.losses_col
    case 14:
      return playoffs.losses_sf
    case 15:
      return playoffs.losses_sd
    case 16:
      return playoffs.losses_bos
    case 17:
      return playoffs.losses_bal
    case 18:
      return playoffs.losses_nyy
    case 19:
      return playoffs.losses_tb
    case 20:
      return playoffs.losses_tor
    case 21:
      return playoffs.losses_cws
    case 22:
      return playoffs.losses_kc
    case 23:
      return playoffs.losses_det
    case 24:
      return playoffs.losses_min
    case 25:
      return playoffs.losses_cle
    case 26:
      return playoffs.losses_laa
    case 27:
      return playoffs.losses_hou
    case 28:
      return playoffs.losses_oak
    case 29:
      return playoffs.losses_sea
    case 30:
      return playoffs.losses_tex
    default:
      return 0
  }

}