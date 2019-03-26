import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Utils/Utils'
import TokenService from '../../services/token-service'
import './LandingPage.css'


export default class ThingListPage extends Component {
  //would like the link here to connect to the user page but can't figure out how to find user id
  renderUserLink() {
    return (
      <div className='Footer__logged-in'>
        <Button>
        <Link to={`/users`}>
          Go to Your User Page!
        </Link>
        </Button>
      </div>
    )
  }

  renderRegisterLink() {
    return (
      <section>
        <header>
            <h3>Ready to see how your city stacks up? Sign-up!</h3>
        </header>
        <Button className='registration-button'>
            <Link
                to='/register'>
                Register
            </Link>
        </Button>
      </section>
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
        <p>[<em>placeholder for screenshot of records interface</em>]</p>
        <p>City Showdown lets you compare your city's playoffs record against another across the four major sports.</p>
      </section>
      <section>
        <header>
            <h3>Yankees/Giants or Mets/Jets? Customize your favorite teams!</h3>
        </header>
        <p>[<em>placeholder for screenshot of registration</em>]</p>
        <p>Many cities have multiple teams for a single sport. Who are we to overlap the Islanders 80s dynasty with the Rangers 1994 Stanley Cup?</p>
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