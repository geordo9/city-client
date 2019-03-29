import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './LandingPage.css'


export default class ThingListPage extends Component {
  //would like the link here to connect to the user page but can't figure out how to find user id
  renderUserLink() {
    return (
      <div className='Footer__logged-in'>
        <Link to={`/user`}>
          Go to Your User Page!
        </Link>
      </div>
    )
  }

  renderRegisterLink() {
    return (
      <div>
        <header>
          <h3>Ready to see how your city stacks up? Sign-up!</h3>
        </header>
          <Link
            className='registration-button'
            to='/register'>
            Register
          </Link>
      </div>
    )
  }

  render() {
      return (
        <main role="main" className="LandingPage">
      <header role="banner">
        <h1>City Showdown</h1>
        <h2>A chance to finally stack up your teams against your friends</h2>
      </header>
      <section>
        <header>
            <h3>Stack up the Cities</h3>
        </header>
        <img src={require('./showdown_page.PNG')} alt={"an example of the showdown page"} />
        <p>City Showdown lets you compare your city's playoffs record against another across the four major sports.</p>
      </section>
      <section>
        <header>
            <h3>Yankees or Mets? Cubs or White Sox? Customize your favorite teams!</h3>
        </header>
        <img src={require('./edit_user_page.PNG')} alt={"an example of the edit user page"} />
        <p>Many cities have multiple teams for a single sport. Who are we to overlap the 2005 White Sox title with the Cubbies' win 2016?</p>
      </section>
      <footer className="LandingPage__footer">
        {TokenService.hasAuthToken()
            ? this.renderUserLink()
            : this.renderRegisterLink()}
      </footer>
    </main>
      );
  }
}