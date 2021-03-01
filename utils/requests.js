import axios from 'axios';
import config from '../config/config.js';

const requestQuery = async (path, token) => {
  return await axios.get(`${config.API_URL}${path}`, {
    headers: { Authorization: token },
  });
};


const errorHandler = async (path, error, req) => {
  try {
    if (error.code === 'ERR_HTTP_INVALID_HEADER_VALUE') {
      const loginRequest = await axios.post(`${config.API_URL}login`, {
        client_id: config.API_CLIENT,
        client_secret: config.API_PASSWORD,
      });

      if (loginRequest.data.token) {
        req.session.token = `Bearer ${loginRequest.data.token}`;
        return await requestQuery(path, `Bearer ${loginRequest.data.token}`);
      }
    } else {
      return error;
    }
  } catch (error) {
    return error;
  }
};
export default {
  requestQuery,
  errorHandler,
};
