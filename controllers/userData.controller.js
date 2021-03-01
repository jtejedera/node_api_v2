import {userDataService} from '../services/index.js';

const getClients = async (req, res, next) => {
  try {
    res.status(200).json(await userDataService.getClients(req))
  }
  catch(error){
    res.status(404).json(error);
  }  
}

module.exports = {
  getClients
} 