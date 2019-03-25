import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext'
import CityApiService from '../../services/city-api-service';
import ShowdownApiService from '../../services/showdown-api-service'


export default class LoginForm extends Component {
  static contextType = UserContext;

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({error: null})
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        const decode = TokenService.parseJwt(res.authToken);
        CityApiService.getUser(decode.user_id)
          .then(this.context.setUser)
          .then(this.context.setError)
        ShowdownApiService.getShowdownByUser(decode.user_id)
          .then(this.context.setShowdowns)
          .then(this.context.setError)
        user_name.value = ''
        password.value = ''
        
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error})
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
