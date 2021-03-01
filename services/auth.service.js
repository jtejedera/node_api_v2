import config from '../config/config.js';
import axios from 'axios';

class auth{
  constructor(){
  };

  async login() {
    try {
      const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': config.API_CLIENT,'client_secret': config.API_PASSWORD})
      return loginRequest.data;
    }
    catch (error){
      return { success: false, data: {}, message: `${error}`}
    }
  } 

  async renew() {
    try {
      const loginRequest = await axios.post(`${config.API_URL}login`, {'client_id': config.API_CLIENT,'client_secret': config.API_PASSWORD})
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