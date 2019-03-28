import React, { Component } from 'react'
import { Button, Required } from '../Utils/Utils'
import UserContext from '../../contexts/UserContext';
import CityApiService from '../../services/city-api-service';

export default class ShowdownForm extends Component {
  static contextType = UserContext;

  static defaultProps = {
    onEditSuccess: () => {}
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
    const { favorite_city, favorite_baseball } = ev.target
    const userId = this.context.user.id;
    console.log(this.context);

    this.setState({error: null})
    CityApiService.editUser(userId, {
      favorite_city: Number(favorite_city.value),
      favorite_baseball: Number(favorite_baseball.value),
    })
      .then(res => {
        CityApiService.getUser(userId)
          .then(this.context.setUser)
          .then(this.context.setError)
        favorite_city.value = ''
        favorite_baseball.value = ''
        this.props.onEditSuccess()
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
        className='EditUserForm'
        onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='favorite_city'>
          <label htmlFor='EditUserForm__favorite_city'>
            Edit Your City
          </label>
          <select name='favorite_city' required id='EditUserForm__favorite_city'>
            <option value = '1'>Atlanta</option>
            <option value = '2'> Baltimore</option>
            <option value = '3'> Boston</option>
            <option value = '4'> Chicago</option>
            <option value = '5'> Cincinnati</option>
            <option value = '6'> Cleveland</option>
            <option value = '7'> Detroit</option>
            <option value = '8'> Dallas</option>
            <option value = '9'> Denver</option>
            <option value = '10'>Houston</option>
            <option value = '11'>Kansas City</option>
            <option value = '12'>Los Angeles</option>
            <option value = '13'>Miami</option>
            <option value = '14'>Milwaukee</option>
            <option value = '15'>Minnesota</option>
            <option value = '16'>New York</option>
            <option value = '17'>Oakland</option>
            <option value = '18'>Philadelphia</option>
            <option value = '19'>Phoneix</option>
            <option value = '20'>Pittsburgh</option>
            <option value = '21'>Saint Louis</option>
            <option value = '22'>San Diego</option>
            <option value = '23'>San Francisco</option>
            <option value = '24'>Seattle</option>
            <option value = '25'>Tampa Bay</option>
            <option value = '26'>Toronto</option>
            <option value = '27'>Washington</option>
          </select>
        </div>
        <div className='favorite_baseball'>
          <label htmlFor='EditUserForm__favorite_baseball'>
            Edit Your Team
          </label>
          <select name='favorite_baseball' required id='EditUserForm__favorite_baseball'>
            <option value = '1'>Atlanta Braves</option>
            <option value = '2'>Miami Marlins</option>
            <option value = '3'>New York Mets</option>
            <option value = '4'>Washington Nationals</option>
            <option value = '5'>Philadelphia Phillies</option>
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
        <Button className='EditUserPage_button' type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}