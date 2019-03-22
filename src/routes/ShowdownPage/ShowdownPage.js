import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import CityApiService from '../../services/city-api-service'
import ShowdownApiService from '../../services/showdown-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import './ShowdownPage.css'

export default class ShowdownPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = UserContext

  componentDidMount() {
    const { userId, showdownId } = this.props.match.params
    this.context.clearError()
    CityApiService.getUser(userId)
      .then(this.context.setUser)
      .catch(this.context.setError)
    ShowdownApiService.getShowdown(showdownId)
      .then(this.context.setShowdown)
      .catch(this.context.setError)
  }


  renderShowdown() {
    const { user, showdown } = this.context
    return <>
      <h2>{user.user_name}'s {showdown.user_baseball_team}</h2>
      <h2>VS.</h2>
      <h3>{showdown.opp_baseball_team}</h3>
      <h4>Playoff Record: {showdown.user_total_wins} <Hyph /> {showdown.user_total_loses}</h4>
    </>
  }

  render() {
    const { error, showdown } = this.context
    let content
    if (error) {
      content = (error.error === `Showdown doesn't exist`)
        ? <p className='red'>Thing not found</p>
        : <p className='red'>There was an error</p>
    } else if (!showdown.id) {
      content = <div className='loading' />
    } else {
      content = this.renderThing()
    }
    return (
      <Section className='ThingPage'>
        {content}
      </Section>
    )
  }
}

// function ThingContent({ thing }) {
//   return (
//     <p className='ThingPage__content'>
//       {thing.content}
//     </p>
//   )
// }

// function ThingReviews({ reviews = [] }) {
//   return (
//     <ul className='ThingPage__review-list'>
//       {reviews.map(review =>
//         <li key={review.id} className='ThingPage__review'>
//           <p className='ThingPage__review-text'>
//             {review.text}
//           </p>
//           <p className='ThingPage__review-user'>
//             <Hyph />
//             {review.user.full_name}
//           </p>
//         </li>
//       )}
//     </ul>
//   )
// }
