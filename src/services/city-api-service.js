import config from '../config'
import TokenService from './token-service';

const CityApiService = {
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
  //patch function that edits the user
  editUser(userId, editedUser){
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(editedUser)
    }).then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e)) 
      : res.json()
    )
  },
}

export default CityApiService
