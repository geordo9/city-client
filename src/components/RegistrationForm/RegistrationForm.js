import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password, favorite_city } = ev.target
    // console.log( favorite_city.value);

    this.setState({error: null})
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      favorite_city: favorite_city.value
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        favorite_city.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='favorite_city'>
          <label htmlFor='RegistrationForm__favorite_city'>
            Select Your City
          </label>
          <select name='favorite_city' required id='RegistrationForm__favorite_city'>
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
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
