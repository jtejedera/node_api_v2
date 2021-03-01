import {policyDataService} from '../services/index.js';

const policyUser = async (req, res, next) => {
  try {
    res.status(200).json(await policyDataService.getPolicies(req))
  }
  catch(error){
    res.status(404).json(error);
  } 
}

module.exports = {
  policyUser
}