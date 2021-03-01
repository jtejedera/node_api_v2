import {authService} from '../services/index.js';

const login = async (req, res, next) => {
  try {

    if(!req.session.token) {
      const newToken = await newAPIToken(req)
      req.session.token = newToken
      req.session.client_id = req.body.client_id
      req.session.client_secret = req.body.client_secret
    }
    const authLogin = new authService.auth(req.body)
    let authResult = await authLogin.login()

    res.status(200).json(authResult)
  }
  catch(error){
    res.status(404).json(error);
  }
}

const newAPIToken = async req => {
  try{
    const auth = new authService.auth(req.body)
    const newToken = await auth.renew()
  
    return `Bearer ${newToken.token}`
  }catch(error){
    return error
  }
}

module.exports = {
  login
}