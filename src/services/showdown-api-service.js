import config from '../config'
import TokenService from './token-service';

const ShowdownApiService = {
    getShowdowns() {
        return fetch(`${config.API_ENDPOINT}/showdowns`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
    },
    //get function that gets a showdown and displays on a page
    getShowdown(showdownId) {
        return fetch(`${config.API_ENDPOINT}/showdowns/${showdownId}`, {
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
    getShowdownByUser(userId) {
        console.log('this is running!');
      return fetch(`${config.API_ENDPOINT}/showdowns/user/${userId}`, {
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
    //post function to create a new showdown
    postShowdown(showdown) {
        return fetch(`${config.API_ENDPOINT}/showdowns`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(showdown)
    })
      .then(res => 
        (!res.ok) 
        ? res.json().then(e => Promise.reject(e)) 
        : res.json()
      )
    },
    
}

export default ShowdownApiService;