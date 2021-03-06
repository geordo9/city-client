import config from '../config'
import TokenService from './token-service';

const ShowdownApiService = {
    //get function that gets a showdown by its id
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
    //delete function that deletes showdown
    deleteShowdown(showdownId) {
        return fetch(`${config.API_ENDPOINT}/showdowns/${showdownId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
      .then(res => res.json)    
    },
    //get function that gets all of the user's showdowns
    getShowdownByUser(userId) {
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
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
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