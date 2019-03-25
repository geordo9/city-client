import React, { Component } from 'react'
import { Section, Button } from '../../components/Utils/Utils'
import ShowdownForm from '../../components/ShowdownForm/ShowdownForm'

export default class CreateShowdownPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleCreationSuccess = () => {
    const { history } = this.props
    history.goBack();
  }

  handleGoBackClicked = () => {
      const  { history } = this.props;
      history.goBack();
  }

  render() {
    return (
      <Section className='CreateShowdownPage'>
        <h2>Create a Showdown</h2>
        <ShowdownForm
          onCreationSuccess={this.handleCreationSuccess}
          props={this.props}
        />
        <Button onClick={() => this.handleGoBackClicked()}>BACK</Button>
      </Section>
    )
  }
}
