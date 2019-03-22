import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import ShowdownForm from '../../components/ShowdownForm/ShowdownForm'

export default class CreateShowdownPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleCreationSuccess = user => {
    const { history } = this.props
    history.push('/user/:userid')
  }

  render() {
    return (
      <Section className='CreateShowdownPage'>
        <h2>Create a Showdown</h2>
        <ShowdownForm
          onCreationSuccess={this.handleCreationSuccess}
          props={this.props}
        />
      </Section>
    )
  }
}
