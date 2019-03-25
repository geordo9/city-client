import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = (userId) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/user/${userId}`
    //would like this to go to /users/:userId on initial login
    history.push(destination)
  }

  render() {
    console.log(this.props);
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
