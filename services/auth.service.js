import config from '../config/config.js';
import axios from 'axios';

class auth{
  constructor(authData){
    this.client_id = authData.client_id
    this.client_secret = authData.client_secret
  };

  async login() {
    try {
      const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': this.client_id,'client_secret':this.client_secret})
      return loginRequest.data;
    }
    catch (error){
      return { success: false, data: {}, message: `${error}`}
    }
  } 

  async renew() {
    try {
      const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': this.client_id,'client_secret': this.client_secret})
      return loginRequest.data;
    }
    catch (error){
      return { success: false, data: {}, message: `${error}`}
    }
  }  
};

module.exports = {
  auth
};