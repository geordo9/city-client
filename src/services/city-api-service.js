import config from '../config'
import TokenService from './token-service';

const CityApiService = {
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
  
  //get function that gets all showdowns a user has created
  getUserShowdowns(userId){},
  //get function that returns the user
  getUser(userId){
    console.log('user got!')
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
  getCityWithUserId(userId){
    const user = this.getUser(userId)
    return fetch(`${config.API_ENDPOINT}/city/${user.favorite_city}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CityApiService
