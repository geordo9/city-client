import config from '../config'
import TokenService from './token-service';

const ThingApiService = {
  getCities() {
    return fetch(`${config.API_ENDPOINT}/city`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCity(cityId) {
    return fetch(`${config.API_ENDPOINT}/city/${cityId}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaseballTeamss() {
    return fetch(`${config.API_ENDPOINT}/baseball`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaseballTeam(baseballId) {
    return fetch(`${config.API_ENDPOINT}/baseball/${baseballId}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaseballPlayoffs() {
    return fetch(`${config.API_ENDPOINT}/baseball/playoffs`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBaseballTeamPlayoffs(baseballId) {
    return fetch(`${config.API_ENDPOINT}/baseball/playoffs/${baseballId}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  //post function to create a new showdown, save it to the user, and take us to the showdown page
  postShowdown(showdown){},
  //get function that gets a showdown and displays on a page
  getShowdown(showdownId){},
  //get function that gets all showdowns a user has created
  getUserShowdowns(userId){},
  //get function that returns the user
  getUser(userId){
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ThingApiService
