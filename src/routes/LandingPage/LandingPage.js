import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThingListContext from '../../contexts/ThingListContext'
import CityApiService from '../../services/city-api-service'
import { Button } from '../../components/Utils/Utils'
import ThingListItem from '../../components/ThingListItem/ThingListItem'

export default class ThingListPage extends Component {
  static contextType = ThingListContext

  render() {
      return (
        <main role="main">
      <header role="banner">
        <h1>City Showdown</h1>
        <h2>A chance to finally stack up your teams against your friends</h2>
      </header>
      <section>
        <header>
            <h3>Stack up the Cities</h3>
        </header>
        <p>[<em>placeholder for screenshot of records interface</em>]</p>
        <p>City Showdown lets you compare your city's overall record against another across the four major sports.</p>
      </section>
      <section>
        <header>
            <h3>Take a look at the Playoffs</h3>
        </header>
        <p>[<em>placeholder for screenshot of playoffs interface</em>]</p>
        <p>Want to take a look at when it really matters? You can distill the Showdown to playoff records.</p>
      </section>
      <section>
        <header>
            <h3>Yankees/Giants or Mets/Jets? Customize your favorite teams!</h3>
        </header>
        <p>[<em>placeholder for screenshot of registration</em>]</p>
        <p>Many cities have multiple teams for a single sport. Who are we to overlap the Islanders 80s dynasty with the Rangers 1994 Stanley Cup?</p>
      </section>
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
    </main>
      );
  }
}