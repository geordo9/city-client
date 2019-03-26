import React, { Component } from 'react'
import { Section, Button } from '../../components/Utils/Utils'
import EditUserForm from '../../components/EditUserForm/EditUserForm'

export default class CreateShowdownPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleEditSuccess = () => {
    const { history } = this.props
    history.push('/user');
  }

  handleGoBackClicked = () => {
      const  { history } = this.props;
      history.goBack();
  }

  render() {
      console.log(this.props.history)
    return (
      <Section className='EditUserPage'>
        <h2>Edit Your Squad of Favorites</h2>
        <EditUserForm
          onEditSuccess={this.handleEditSuccess}
          props={this.props}
        />
        <Button onClick={() => this.handleGoBackClicked()}>BACK</Button>
      </Section>
    )
  }
}